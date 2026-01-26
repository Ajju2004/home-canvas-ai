import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { image, roomType, designLevel } = await req.json();

    if (!image || !roomType || !designLevel) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: image, roomType, designLevel" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build design prompt based on user selections
    const designDescriptions: Record<string, string> = {
      basic: "clean, functional, minimalist with essential furniture and neutral tones",
      medium: "stylish, comfortable with modern furniture, balanced colors, and tasteful decor",
      luxurious: "premium, elegant with high-end furniture, rich textures, ambient lighting, and sophisticated design elements"
    };

    const roomDescriptions: Record<string, string> = {
      bedroom: "bedroom with a bed, nightstands, wardrobe, and soft lighting",
      "living-room": "living room with a sofa, coffee table, TV unit, and decorative elements",
      kitchen: "kitchen with cabinets, countertops, appliances, and dining area",
      bathroom: "bathroom with vanity, fixtures, tiles, and modern amenities"
    };

    const designStyle = designDescriptions[designLevel] || designDescriptions.medium;
    const roomDesc = roomDescriptions[roomType] || "room with appropriate furniture";

    const prompt = `Transform this empty room into a beautifully designed ${roomType.replace("-", " ")}. 
Create a ${designStyle} interior design.
Add realistic furniture and decor typical of a ${roomDesc}.
Preserve the original room structure including walls, windows, doors, and lighting direction.
Ensure photorealistic quality with proper proportions and perspective.
The design should look professional and livable.`;

    console.log("Generating interior design with prompt:", prompt);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: prompt
              },
              {
                type: "image_url",
                image_url: {
                  url: image
                }
              }
            ]
          }
        ],
        modalities: ["image", "text"]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to generate design. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    console.log("AI response received successfully");

    // Extract the generated image from the response
    const generatedImage = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    const textResponse = data.choices?.[0]?.message?.content || "";

    if (!generatedImage) {
      console.error("No image in response:", JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: "Failed to generate image. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ 
        generatedImage,
        description: textResponse,
        roomType,
        designLevel
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in generate-interior function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

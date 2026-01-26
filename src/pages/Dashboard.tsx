import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { 
  Upload, 
  Image as ImageIcon, 
  Sparkles, 
  LogOut, 
  Bed, 
  Sofa, 
  ChefHat, 
  Bath,
  Loader2,
  X
} from "lucide-react";

const roomTypes = [
  { value: "bedroom", label: "Bedroom", icon: Bed },
  { value: "living-room", label: "Living Room", icon: Sofa },
  { value: "kitchen", label: "Kitchen", icon: ChefHat },
  { value: "bathroom", label: "Bathroom", icon: Bath },
];

const designLevels = [
  { value: "basic", label: "Basic", description: "Clean & functional" },
  { value: "medium", label: "Medium", description: "Stylish & comfortable" },
  { value: "luxurious", label: "Luxurious", description: "Premium & elegant" },
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [roomType, setRoomType] = useState<string>("");
  const [designLevel, setDesignLevel] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPG, PNG)",
          variant: "destructive",
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleGenerate = async () => {
    if (!uploadedImage || !roomType || !designLevel) {
      toast({
        title: "Missing information",
        description: "Please upload an image and select all options",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-interior', {
        body: {
          image: uploadedImage,
          roomType,
          designLevel,
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to generate design');
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      navigate("/result", {
        state: {
          originalImage: uploadedImage,
          generatedImage: data.generatedImage,
          description: data.description,
          roomType,
          designLevel,
        },
      });
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: "Generation failed",
        description: error instanceof Error ? error.message : "Could not generate design. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen gradient-soft">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center shadow-warm">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-foreground">Interior Magic</h1>
              <p className="text-xs text-muted-foreground">AI Design Studio</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Welcome, <span className="font-medium text-foreground">{user?.name}</span>
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Transform Your Space
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload an empty room photo and let AI create stunning interior designs tailored to your preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Label className="text-base font-semibold">Upload Room Image</Label>
            
            <div 
              className={`relative rounded-2xl border-2 border-dashed transition-all duration-300 overflow-hidden ${
                uploadedImage 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50 bg-card/50"
              }`}
              style={{ aspectRatio: "4/3" }}
            >
              {uploadedImage ? (
                <>
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded room" 
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={clearImage}
                    className="absolute top-3 right-3 rounded-full shadow-lg"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </>
              ) : (
                <label className="flex flex-col items-center justify-center h-full cursor-pointer p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-foreground font-medium mb-1">
                    Drop your image here
                  </p>
                  <p className="text-muted-foreground text-sm">
                    or click to browse (JPG, PNG)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Options Section */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Room Type */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Room Type</Label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger className="h-14 rounded-xl bg-card border-border/60">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border rounded-xl">
                  {roomTypes.map((room) => (
                    <SelectItem key={room.value} value={room.value} className="rounded-lg">
                      <div className="flex items-center gap-3">
                        <room.icon className="w-5 h-5 text-primary" />
                        <span>{room.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Design Level */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Design Level</Label>
              <div className="grid grid-cols-3 gap-3">
                {designLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setDesignLevel(level.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      designLevel === level.value
                        ? "border-primary bg-primary/10 shadow-warm"
                        : "border-border/60 bg-card hover:border-primary/40"
                    }`}
                  >
                    <p className="font-semibold text-foreground text-sm">{level.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{level.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Card */}
            {(roomType || designLevel) && (
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="flex items-start gap-3">
                  <ImageIcon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Design Preview</p>
                    <p className="text-sm text-muted-foreground">
                      {roomType && designLevel 
                        ? `A ${designLevel} ${roomType.replace("-", " ")} design`
                        : "Complete your selections to see preview"
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={!uploadedImage || !roomType || !designLevel || isGenerating}
              className="w-full h-14 rounded-xl text-base font-semibold gradient-warm text-primary-foreground shadow-warm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Magic...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Generate Design
                </span>
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
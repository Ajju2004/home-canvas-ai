import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, RotateCcw, Sparkles, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

// Placeholder generated images based on room type and design level
const getGeneratedImage = (roomType: string, designLevel: string): string => {
  // In production, this would be the AI-generated image
  // For demo, we'll show a placeholder with text
  return "";
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { originalImage, roomType, designLevel } = location.state || {};
  const [showComparison, setShowComparison] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!originalImage) {
      navigate("/dashboard");
      return;
    }
    
    // Simulate loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, [originalImage, navigate]);

  if (!originalImage) {
    return null;
  }

  const roomLabel = roomType?.replace("-", " ");
  const levelLabel = designLevel?.charAt(0).toUpperCase() + designLevel?.slice(1);

  return (
    <div className="min-h-screen gradient-soft">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center shadow-warm">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Success Badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Design Generated Successfully!</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Your {levelLabel} {roomLabel}
          </h1>
          <p className="text-muted-foreground">
            AI has transformed your empty space into a beautiful interior
          </p>
        </div>

        {/* Image Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Original Image */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Before</span>
              <span className="px-2 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                Original
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft border border-border/50 bg-card">
              <img 
                src={originalImage} 
                alt="Original room" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Generated Image */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">After</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                AI Generated
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-warm border border-primary/20 bg-card relative">
              {!isLoaded ? (
                <div className="w-full aspect-[4/3] flex items-center justify-center bg-muted/50">
                  <div className="text-center">
                    <div className="w-12 h-12 border-3 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Applying AI magic...</p>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-[4/3] relative bg-gradient-to-br from-primary/5 to-accent/10">
                  <img 
                    src={originalImage} 
                    alt="Generated design" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  {/* Overlay to simulate AI transformation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6 bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg">
                      <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                      <p className="font-heading font-bold text-foreground mb-1">
                        {levelLabel} {roomLabel} Design
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Connect an AI API to see real transformations
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Design Details */}
        <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="font-heading font-semibold text-foreground mb-4">Design Details</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-muted/50">
              <p className="text-sm text-muted-foreground mb-1">Room Type</p>
              <p className="font-semibold text-foreground capitalize">{roomLabel}</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <p className="text-sm text-muted-foreground mb-1">Design Level</p>
              <p className="font-semibold text-foreground capitalize">{levelLabel}</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <p className="text-sm text-muted-foreground mb-1">Status</p>
              <p className="font-semibold text-primary">Complete</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard")}
            className="h-12 px-6 rounded-xl"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Transform Another Room
          </Button>
          <Button
            className="h-12 px-6 rounded-xl gradient-warm text-primary-foreground shadow-warm hover:shadow-lg transition-all"
            onClick={() => {
              // In production, implement download functionality
              alert("Download feature - Connect to AI API for full functionality");
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Design
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Result;
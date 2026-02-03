import PageLayout from "@/components/layout/PageLayout";
import SectionCard from "@/components/ui/SectionCard";
import { 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  AlertTriangle,
  Target,
  Rocket,
  Users,
  Building
} from "lucide-react";

const ScopePage = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Project Scope</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Project Scope & Boundaries
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of what the Automated Virtual Interior Design Software includes and excludes
          </p>
        </div>
      </section>

      {/* In-Scope & Out-of-Scope */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* In-Scope */}
            <SectionCard icon={CheckCircle2} title="In-Scope Features">
              <ul className="space-y-4">
                {[
                  {
                    title: "Image Upload & Validation",
                    desc: "Support for JPG, PNG, and WebP formats with automatic size validation"
                  } as const,
                  {
                    title: "Room Type Selection",
                    desc: "Bedroom, Living Room, Kitchen, and Bathroom configurations"
                  },
                  {
                    title: "Design Level Options",
                    desc: "Basic, Medium, and Luxurious interior design styles"
                  },
                  {
                    title: "AI Image Processing",
                    desc: "Computer vision analysis and generative AI for design creation"
                  },
                  {
                    title: "Real-time Generation",
                    desc: "Live processing with progress indicators and status updates"
                  },
                  {
                    title: "Result Visualization",
                    desc: "Side-by-side comparison of original and generated designs"
                  },
                  {
                    title: "Download Functionality",
                    desc: "Export generated designs as high-resolution images"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Out-of-Scope */}
            <SectionCard icon={XCircle} title="Out-of-Scope Features">
              <ul className="space-y-4">
                {[
                  {
                    title: "Real-time AR/VR Rendering",
                    desc: "Augmented or virtual reality visualization is not supported"
                  },
                  {
                    title: "Cost Estimation",
                    desc: "No pricing or purchasing integration for furniture/materials"
                  },
                  {
                    title: "Live Collaboration",
                    desc: "Real-time collaboration with professional designers"
                  },
                  {
                    title: "3D Model Generation",
                    desc: "Three-dimensional room modeling and walkthrough"
                  },
                  {
                    title: "E-commerce Integration",
                    desc: "Direct purchasing of furniture or decor items"
                  },
                  {
                    title: "Physical Measurements",
                    desc: "Precise room measurements and furniture sizing"
                  },
                  {
                    title: "Smart Home Integration",
                    desc: "IoT device configuration or home automation"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Real-World Use Cases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Practical applications of the interior design software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Homeowners",
                desc: "Visualize room makeovers before committing to purchases or renovations"
              },
              {
                icon: Building,
                title: "Real Estate",
                desc: "Stage vacant properties virtually to attract potential buyers"
              },
              {
                icon: Lightbulb,
                title: "Design Students",
                desc: "Learn and experiment with different interior design styles"
              },
              {
                icon: Rocket,
                title: "Startups",
                desc: "Plan office spaces and collaborative work environments"
              }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border/50 p-6 text-center shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <SectionCard icon={Rocket} title="Future Enhancements">
                <ul className="space-y-3">
                  {[
                    "3D room visualization and virtual walkthroughs",
                    "Augmented Reality (AR) preview on mobile devices",
                    "Personalized style recommendations based on user preferences",
                    "Multi-room design consistency",
                    "Seasonal and trending design suggestions",
                    "Integration with furniture catalogs for purchasing",
                    "Collaborative design sessions with professionals"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard icon={AlertTriangle} title="Limitations & Assumptions">
                <ul className="space-y-3">
                  {[
                    "Requires clear, well-lit room photographs for optimal results",
                    "Empty or minimally furnished rooms produce best outputs",
                    "Internet connectivity required for AI processing",
                    "Generated designs are suggestions, not precise blueprints",
                    "Processing time varies based on image complexity",
                    "Results depend on AI model capabilities and training data",
                    "No guarantee of furniture availability or exact pricing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ScopePage;

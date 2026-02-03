import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionCard from "@/components/ui/SectionCard";
import { 
  Sparkles, 
  History, 
  Lightbulb, 
  Wrench, 
  ArrowRight, 
  CheckCircle2,
  Cpu,
  Upload,
  Wand2,
  Download
} from "lucide-react";

const HomePage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
        <div className="absolute top-40 right-20 w-14 h-14 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: "0.5s" }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Interior Design</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Automated Virtual Interior Design Software
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transform empty rooms into stunning, professionally designed interiors using the power of artificial intelligence and computer vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/login"
              className="gradient-warm text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold shadow-warm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
            >
              Try It Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/scope"
              className="bg-card border border-border text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-muted/50 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Project History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Project Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the vision and motivation behind this innovative solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <SectionCard icon={History} title="Project History">
              <p className="mb-4">
                The <strong className="text-foreground">Automated Virtual Interior Design Software</strong> was developed to address the growing demand for accessible, intelligent interior design solutions.
              </p>
              <p className="mb-4">
                Traditional interior design processes are often time-consuming, expensive, and require specialized expertise. Many homeowners and businesses struggle to visualize how their spaces could be transformed without hiring professional designers.
              </p>
              <p>
                This project was initiated to democratize interior design by leveraging cutting-edge AI and computer vision technologies, making professional-quality design recommendations available to everyone.
              </p>
            </SectionCard>

            <SectionCard icon={Lightbulb} title="Problem Statement">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Manual Planning:</strong> Traditional interior design requires extensive manual effort and expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Visualization Gap:</strong> Clients struggle to imagine final outcomes before implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Cost Barriers:</strong> Professional design services are expensive and inaccessible to many</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Time Constraints:</strong> Design iterations take weeks or months with traditional methods</span>
                </li>
              </ul>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Implementation Details Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Implementation Details</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key features and system workflows powering the application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <SectionCard icon={Wrench} title="Key Features">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  AI-powered image analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Multiple room type support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Customizable design levels
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Real-time image generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Download & share results
                </li>
              </ul>
            </SectionCard>

            <SectionCard icon={Cpu} title="AI Processing">
              <p className="mb-3">
                The system utilizes advanced computer vision and generative AI models to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Analyze room structure and layout
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Detect walls, windows, and doors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Generate contextual furniture placement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Maintain perspective and lighting
                </li>
              </ul>
            </SectionCard>

            <SectionCard icon={Sparkles} title="Design Options">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-semibold text-foreground text-sm">Room Types</p>
                  <p className="text-sm">Bedroom, Living Room, Kitchen, Bathroom</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-semibold text-foreground text-sm">Design Levels</p>
                  <p className="text-sm">Basic, Medium, Luxurious</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-semibold text-foreground text-sm">Output</p>
                  <p className="text-sm">High-resolution AI-generated designs</p>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* End-to-End Flow Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">End-to-End Workflow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From image upload to AI-generated interior design in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Upload, step: "01", title: "Upload", desc: "Upload an empty room image (JPG, PNG)" },
              { icon: Wrench, step: "02", title: "Configure", desc: "Select room type and design level" },
              { icon: Wand2, step: "03", title: "Generate", desc: "AI processes and generates design" },
              { icon: Download, step: "04", title: "Download", desc: "View and download your new interior" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-warm flex items-center justify-center mx-auto mb-4 shadow-warm">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-xs font-bold text-primary">STEP {item.step}</span>
                <h3 className="text-lg font-heading font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lifted">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Experience the future of interior design. Upload your room and watch as AI creates stunning designs in seconds.
            </p>
            <Link
              to="/login"
              className="gradient-warm text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold shadow-warm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Designing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;

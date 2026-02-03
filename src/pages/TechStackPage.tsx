import PageLayout from "@/components/layout/PageLayout";
import SectionCard from "@/components/ui/SectionCard";
import { 
  Layers, 
  Code2, 
  Server, 
  Cpu, 
  Database, 
  Cloud,
  GitBranch,
  Boxes
} from "lucide-react";

interface TechItemProps {
  name: string;
  role: string;
  reason: string;
}

const TechItem = ({ name, role, reason }: TechItemProps) => (
  <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
    <h4 className="font-semibold text-foreground mb-1">{name}</h4>
    <p className="text-sm text-primary font-medium mb-2">{role}</p>
    <p className="text-sm text-muted-foreground">{reason}</p>
  </div>
);

const TechStackPage = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">Technology Stack</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Technologies Used
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive breakdown of the technologies powering the Automated Virtual Interior Design Software
          </p>
        </div>
      </section>

      {/* Frontend Stack */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionCard icon={Code2} title="Frontend Technologies" className="mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <TechItem 
                  name="HTML5"
                  role="Markup & Structure"
                  reason="Provides semantic structure for web pages, ensuring accessibility and SEO optimization. HTML5 features enable modern web capabilities."
                />
                <TechItem 
                  name="CSS3"
                  role="Styling & Layout"
                  reason="Powers responsive design with Flexbox and Grid. Combined with Tailwind CSS for utility-first styling and consistent design tokens."
                />
                <TechItem 
                  name="JavaScript (ES6+)"
                  role="Client-side Logic"
                  reason="Handles dynamic interactions, DOM manipulation, and asynchronous operations. Modern ES6+ features improve code readability and maintainability."
                />
                <TechItem 
                  name="React.js"
                  role="UI Component Library"
                  reason="Component-based architecture enables reusable UI elements, efficient state management, and virtual DOM for optimized rendering performance."
                />
                <TechItem 
                  name="TypeScript"
                  role="Type Safety"
                  reason="Adds static typing to JavaScript, catching errors at compile-time, improving code quality, and enhancing developer productivity with better IDE support."
                />
                <TechItem 
                  name="Tailwind CSS"
                  role="Utility-First CSS"
                  reason="Rapid UI development with pre-defined utility classes. Enables consistent design system implementation and reduces CSS bundle size."
                />
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Backend Stack */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionCard icon={Server} title="Backend Technologies" className="mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <TechItem 
                  name="Python"
                  role="Backend Language"
                  reason="Industry-standard for AI/ML applications. Rich ecosystem of libraries for image processing, data manipulation, and API development."
                />
                <TechItem 
                  name="Flask / FastAPI"
                  role="Web Framework"
                  reason="Lightweight REST API frameworks. FastAPI offers async support and automatic OpenAPI documentation. Flask provides simplicity and flexibility."
                />
                <TechItem 
                  name="Edge Functions"
                  role="Serverless Computing"
                  reason="Serverless functions for API endpoints. Enable scalable, cost-effective backend operations without managing infrastructure."
                />
                <TechItem 
                  name="RESTful APIs"
                  role="API Architecture"
                  reason="Stateless request-response design pattern. JSON-based communication between frontend and backend ensures interoperability."
                />
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* AI & Image Processing */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionCard icon={Cpu} title="AI & Image Processing" className="mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <TechItem 
                  name="Computer Vision Models"
                  role="Image Analysis"
                  reason="CNN-based and pre-trained models analyze room structure, detect objects, and understand spatial relationships for accurate design generation."
                />
                <TechItem 
                  name="OpenCV / PIL"
                  role="Image Preprocessing"
                  reason="Industry-standard libraries for image manipulation, resizing, format conversion, and preprocessing before AI model inference."
                />
                <TechItem 
                  name="Generative AI"
                  role="Design Generation"
                  reason="Advanced image-to-image models transform empty rooms into furnished interiors while preserving room structure and lighting."
                />
                <TechItem 
                  name="Google Gemini"
                  role="AI Model Provider"
                  reason="State-of-the-art multimodal AI model capable of understanding images and generating contextual interior design recommendations."
                />
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Database & Storage */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionCard icon={Database} title="Database & Storage" className="mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <TechItem 
                  name="SQLite / PostgreSQL"
                  role="Relational Database"
                  reason="Stores user data, session information, and design metadata. PostgreSQL offers scalability for production deployments."
                />
                <TechItem 
                  name="MongoDB"
                  role="Document Database"
                  reason="Flexible schema for storing design configurations, user preferences, and processing logs as JSON documents."
                />
                <TechItem 
                  name="Cloud Storage"
                  role="File Storage"
                  reason="Scalable object storage for uploaded images and generated designs. Supports CDN distribution for fast global access."
                />
                <TechItem 
                  name="Supabase"
                  role="Backend-as-a-Service"
                  reason="Provides authentication, real-time database, and storage. Simplifies backend development with auto-generated APIs."
                />
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Deployment & Tools */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionCard icon={Cloud} title="Deployment & DevOps" className="mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <TechItem 
                  name="Docker"
                  role="Containerization"
                  reason="Ensures consistent environments across development, testing, and production. Simplifies deployment and scaling."
                />
                <TechItem 
                  name="AWS / Vercel / Railway"
                  role="Cloud Hosting"
                  reason="Scalable cloud platforms for hosting frontend and backend services. Auto-scaling handles varying traffic loads."
                />
                <TechItem 
                  name="Git & GitHub"
                  role="Version Control"
                  reason="Source code management with branching strategies. GitHub Actions enables CI/CD automation."
                />
                <TechItem 
                  name="Postman"
                  role="API Testing"
                  reason="API development and testing platform. Enables comprehensive endpoint testing and documentation."
                />
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">System Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-level overview of the application architecture
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border/50 p-8 shadow-soft">
            <div className="grid grid-cols-3 gap-4 text-center">
              {/* Frontend Layer */}
              <div className="col-span-3 p-4 rounded-xl bg-secondary/30 border border-secondary/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Boxes className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Frontend Layer</span>
                </div>
                <p className="text-sm text-muted-foreground">React.js • TypeScript • Tailwind CSS</p>
              </div>

              {/* Arrow */}
              <div className="col-span-3 flex justify-center py-2">
                <div className="w-0.5 h-8 bg-border" />
              </div>

              {/* API Layer */}
              <div className="col-span-3 p-4 rounded-xl bg-primary/10 border border-primary/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Server className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">API Layer</span>
                </div>
                <p className="text-sm text-muted-foreground">Edge Functions • REST APIs • JSON</p>
              </div>

              {/* Arrow */}
              <div className="col-span-3 flex justify-center py-2">
                <div className="w-0.5 h-8 bg-border" />
              </div>

              {/* Processing Layer */}
              <div className="p-4 rounded-xl bg-accent/20 border border-accent/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-accent-foreground" />
                  <span className="font-semibold text-foreground text-sm">AI Processing</span>
                </div>
                <p className="text-xs text-muted-foreground">Gemini • CV Models</p>
              </div>
              
              <div className="p-4 rounded-xl bg-muted border border-border">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-muted-foreground" />
                  <span className="font-semibold text-foreground text-sm">Database</span>
                </div>
                <p className="text-xs text-muted-foreground">PostgreSQL • Storage</p>
              </div>
              
              <div className="p-4 rounded-xl bg-secondary/50 border border-secondary">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-secondary-foreground" />
                  <span className="font-semibold text-foreground text-sm">DevOps</span>
                </div>
                <p className="text-xs text-muted-foreground">Docker • CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechStackPage;

import PageLayout from "@/components/layout/PageLayout";
import { Users, Code2, Server, Layout, FileText, Mail, Github, Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  title: string;
  contributions: string[];
  responsibilities: string[];
  avatar: string;
}

const TeamMember = ({ name, role, title, contributions, responsibilities, avatar }: TeamMemberProps) => (
  <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-300">
    <div className="gradient-warm h-24 relative">
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-24 h-24 rounded-2xl bg-card border-4 border-card flex items-center justify-center text-3xl font-bold text-primary shadow-lg">
          {avatar}
        </div>
      </div>
    </div>
    
    <div className="pt-16 pb-6 px-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-heading font-bold text-foreground">{name}</h3>
        <p className="text-primary font-medium">{role}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <span className="w-1 h-4 bg-primary rounded-full" />
            Contributions
          </h4>
          <ul className="space-y-1">
            {contributions.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <span className="w-1 h-4 bg-accent rounded-full" />
            Responsibilities
          </h4>
          <ul className="space-y-1">
            {responsibilities.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6 pt-4 border-t border-border/50">
        <button className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
          <Mail className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
          <Github className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
          <Linkedin className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const teamMembers: TeamMemberProps[] = [
  {
    name: "K. Ajay Kumar",
    role: "Team Lead",
    title: "Full-Stack Developer",
    avatar: "AK",
    contributions: [
      "Overall project architecture design",
      "Frontend-backend integration",
      "AI pipeline implementation",
      "Code review and quality assurance"
    ],
    responsibilities: [
      "Lead development sprints",
      "Coordinate team activities",
      "Technical decision making",
      "Project timeline management"
    ]
  },
  {
    name: "M. Sai Kumar",
    role: "Backend Developer",
    title: "API Integration Specialist",
    avatar: "SK",
    contributions: [
      "REST API development",
      "Database schema design",
      "Edge function implementation",
      "AI model integration"
    ],
    responsibilities: [
      "Backend architecture",
      "API documentation",
      "Performance optimization",
      "Security implementation"
    ]
  },
  {
    name: "K. Sanjay",
    role: "Frontend Developer",
    title: "UI/UX Specialist",
    avatar: "KS",
    contributions: [
      "React component development",
      "Responsive UI design",
      "User experience optimization",
      "Design system implementation"
    ],
    responsibilities: [
      "UI/UX design",
      "Frontend architecture",
      "Cross-browser compatibility",
      "Accessibility compliance"
    ]
  },
  {
    name: "G. Tejaswini",
    role: "QA & Documentation",
    title: "Testing & Research Lead",
    avatar: "GT",
    contributions: [
      "Test case development",
      "Quality assurance protocols",
      "Technical documentation",
      "Research and analysis"
    ],
    responsibilities: [
      "Documentation maintenance",
      "Testing coordination",
      "User research",
      "Bug tracking and reporting"
    ]
  }
];

const TeamPage = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Meet the Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind the Automated Virtual Interior Design Software
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Roles Overview */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Team Structure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team follows an agile development methodology with clear role definitions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Team Lead",
                desc: "Coordinates development, makes technical decisions, and ensures project delivery"
              },
              {
                icon: Server,
                title: "Backend",
                desc: "Develops APIs, manages databases, and integrates AI processing systems"
              },
              {
                icon: Layout,
                title: "Frontend",
                desc: "Creates user interfaces, implements designs, and ensures responsive layouts"
              },
              {
                icon: FileText,
                title: "QA & Docs",
                desc: "Tests functionality, documents features, and conducts research"
              }
            ].map((role, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border/50 p-6 text-center shadow-soft">
                <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mx-auto mb-4 shadow-warm">
                  <role.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-12 max-w-4xl mx-auto shadow-lifted">
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Collaborative Development
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Our team employs modern development practices including version control with Git, code reviews, continuous integration, and agile sprints to deliver high-quality software.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Git", value: "Version Control" },
                  { label: "Agile", value: "Methodology" },
                  { label: "CI/CD", value: "Automation" },
                  { label: "Reviews", value: "Code Quality" }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-muted/30">
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;

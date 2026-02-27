import { ReactNode } from "react";
import MainNavigation from "./MainNavigation";
import { Link } from "react-router-dom";
import { Sparkles, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main>{children}</main>

      {/* Premium Footer */}
      <footer className="border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-lg text-foreground">Interior Magic</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transform your spaces with the power of AI. Professional interior design made accessible to everyone.
              </p>
              <div className="flex items-center gap-3">
                {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground">Product</h4>
              <ul className="space-y-2.5">
                {["Features", "Pricing", "Design Styles", "API"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground">Company</h4>
              <ul className="space-y-2.5">
                {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">Get the latest design trends and AI updates.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
                <button className="px-4 py-2.5 rounded-xl gradient-gold text-primary-foreground text-sm font-medium shadow-gold hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 Interior Magic. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;

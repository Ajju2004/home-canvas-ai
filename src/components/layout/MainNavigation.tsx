import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Target, Layers, Users, Sparkles } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/scope", label: "Scope", icon: Target },
  { path: "/tech-stack", label: "Tech Stack", icon: Layers },
  { path: "/team", label: "Team", icon: Users },
];

const MainNavigation = () => {
  const location = useLocation();

  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center shadow-warm">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-foreground">Interior Magic</h1>
              <p className="text-xs text-muted-foreground">AI Design Studio</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/login"
            className="gradient-warm text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold shadow-warm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center gap-1 mt-4 overflow-x-auto pb-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;

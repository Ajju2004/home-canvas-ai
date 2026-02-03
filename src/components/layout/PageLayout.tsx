import { ReactNode } from "react";
import MainNavigation from "./MainNavigation";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen gradient-soft">
      <MainNavigation />
      <main>{children}</main>
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Automated Virtual Interior Design Software. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Powered by AI • Built with React & Python
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;

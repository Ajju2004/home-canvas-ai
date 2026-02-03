import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

const SectionCard = ({ icon: Icon, title, children, className }: SectionCardProps) => {
  return (
    <div className={cn(
      "bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-soft",
      className
    )}>
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <h3 className="text-xl font-heading font-bold text-foreground">{title}</h3>
      </div>
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Lock, Check, X } from "lucide-react";
import { z } from "zod";

const passwordRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One lowercase letter", test: (p: string) => /[a-z]/.test(p) },
  { label: "One number", test: (p: string) => /\d/.test(p) },
  { label: "One special character", test: (p: string) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
];

const schema = z.object({
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/\d/)
    .regex(/[!@#$%^&*(),.?":{}|<>]/),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const { updatePassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("type=recovery")) {
      setIsRecovery(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ password, confirmPassword });
    if (!result.success) {
      toast({ title: "Invalid password", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await updatePassword(password);
      if (error) {
        toast({ title: "Error", description: error, variant: "destructive" });
      } else {
        toast({ title: "Password updated!", description: "You can now sign in with your new password." });
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isRecovery) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-card/80 backdrop-blur-xl rounded-3xl shadow-lifted p-8 border border-border/50 text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Invalid Link</h2>
          <p className="text-muted-foreground mb-4">This password reset link is invalid or has expired.</p>
          <Button onClick={() => navigate("/forgot-password")} className="rounded-xl">
            Request New Link
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card/80 backdrop-blur-xl rounded-3xl shadow-lifted p-8 border border-border/50">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Set New Password</h1>
        <p className="text-muted-foreground mb-6">Choose a strong password for your account.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 h-12 rounded-xl border-border/60 bg-background/50"
                required
              />
            </div>
            {password && (
              <div className="space-y-1 p-3 rounded-lg bg-secondary/30">
                {passwordRules.map((rule) => (
                  <div key={rule.label} className="flex items-center gap-2 text-xs">
                    {rule.test(password) ? <Check className="w-3 h-3 text-green-500" /> : <X className="w-3 h-3 text-destructive" />}
                    <span className={rule.test(password) ? "text-green-600" : "text-muted-foreground"}>{rule.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-12 h-12 rounded-xl border-border/60 bg-background/50"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 rounded-xl text-base font-semibold gradient-warm text-primary-foreground"
          >
            {isLoading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

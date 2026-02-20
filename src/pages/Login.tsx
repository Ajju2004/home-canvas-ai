import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AnimatedMonkey from "@/components/AnimatedMonkey";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Lock, Sparkles, ArrowRight } from "lucide-react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255),
  password: z.string().min(1, "Password is required"),
});

const FloatingParticle = ({ delay, size, x, y, duration }: { delay: number; size: number; x: string; y: string; duration: number }) => (
  <div
    className="absolute rounded-full bg-primary/10 animate-particle"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  />
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mounted, setMounted] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await login(email, password);
      if (error) {
        toast({ title: "Login failed", description: error, variant: "destructive" });
      } else {
        toast({ title: "Welcome back! 🎨", description: "Let's transform some spaces!" });
        navigate("/dashboard");
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient-shift" style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 25%, hsl(var(--background)) 50%, hsl(var(--accent)/0.15) 75%, hsl(var(--background)) 100%)",
        backgroundSize: "400% 400%",
      }} />

      {/* Floating orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl animate-orb-drift" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/10 blur-3xl animate-orb-drift-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-soft" />

      {/* Particles */}
      <FloatingParticle delay={0} size={8} x="10%" y="20%" duration={6} />
      <FloatingParticle delay={1.2} size={6} x="85%" y="15%" duration={7} />
      <FloatingParticle delay={0.5} size={10} x="75%" y="70%" duration={5} />
      <FloatingParticle delay={2} size={5} x="20%" y="80%" duration={8} />
      <FloatingParticle delay={1.8} size={7} x="50%" y="10%" duration={6.5} />
      <FloatingParticle delay={0.8} size={9} x="90%" y="50%" duration={7.5} />
      <FloatingParticle delay={3} size={4} x="30%" y="45%" duration={9} />

      {/* Card */}
      <div className={`w-full max-w-md relative z-10 transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
        <div className="relative">
          {/* Card glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[1.75rem] blur-xl opacity-60 animate-glow-pulse" />

          <div className="relative bg-card/85 backdrop-blur-2xl rounded-3xl shadow-lifted p-8 border border-border/40">
            {/* Monkey */}
            <div className={`transition-all duration-500 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <AnimatedMonkey isPasswordFocused={isPasswordFocused} isUsernameFocused={isUsernameFocused} />
            </div>

            {/* Header */}
            <div className={`text-center mb-8 transition-all duration-500 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-shimmer">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span className="text-sm font-medium">AI-Powered Design</span>
              </div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to continue designing</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className={`space-y-2 transition-all duration-500 delay-[400ms] ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <div className="relative group">
                  <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/40 to-accent/40 opacity-0 blur transition-opacity duration-300 ${isUsernameFocused ? "opacity-100" : "group-hover:opacity-50"}`} />
                  <div className="relative">
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isUsernameFocused ? "text-primary" : "text-muted-foreground"}`} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsUsernameFocused(true)}
                      onBlur={() => setIsUsernameFocused(false)}
                      className="pl-12 h-12 rounded-xl border-border/60 bg-background/50 focus:bg-background focus:border-primary/50 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                {errors.email && <p className="text-sm text-destructive animate-fade-in">{errors.email}</p>}
              </div>

              <div className={`space-y-2 transition-all duration-500 delay-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Link to="/forgot-password" className="text-xs text-primary hover:underline transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent/40 to-primary/40 opacity-0 blur transition-opacity duration-300 ${isPasswordFocused ? "opacity-100" : "group-hover:opacity-50"}`} />
                  <div className="relative">
                    <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isPasswordFocused ? "text-primary" : "text-muted-foreground"}`} />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                      className="pl-12 h-12 rounded-xl border-border/60 bg-background/50 focus:bg-background focus:border-primary/50 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                {errors.password && <p className="text-sm text-destructive animate-fade-in">{errors.password}</p>}
              </div>

              <div className={`transition-all duration-500 delay-[600ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-xl text-base font-semibold gradient-warm text-primary-foreground shadow-warm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Sign In
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            <p className={`text-center text-sm text-muted-foreground mt-6 transition-all duration-500 delay-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

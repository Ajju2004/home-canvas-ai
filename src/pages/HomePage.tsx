import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedMonkey from "@/components/AnimatedMonkey";
import {
  Sparkles,
  ArrowRight,
  Upload,
  Palette,
  Wand2,
  Star,
  Check,
  Crown,
  Zap,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const }
  }),
};

const designStyles = [
  { name: "Modern", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop" },
  { name: "Scandinavian", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
  { name: "Luxury", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop" },
  { name: "Minimal", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop" },
  { name: "Industrial", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop" },
  { name: "Contemporary", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop" },
];

const testimonials = [
  { name: "Sarah Chen", role: "Homeowner", text: "Transformed my living room in minutes. The AI suggestions were spot-on!", rating: 5 },
  { name: "James Parker", role: "Interior Designer", text: "I use this for quick concept iterations with clients. Incredible time saver.", rating: 5 },
  { name: "Maria Rodriguez", role: "Real Estate Agent", text: "Virtual staging has never been this easy. My listings sell faster now.", rating: 5 },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out",
    icon: Zap,
    features: ["3 designs per month", "Standard quality", "Basic room types", "Community support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For enthusiasts & pros",
    icon: Crown,
    features: ["Unlimited designs", "HD quality output", "All room types & styles", "Priority support", "Design history", "Download originals"],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$79",
    period: "/month",
    description: "For firms & agencies",
    icon: Building2,
    features: ["Everything in Pro", "Team collaboration", "API access", "Custom branding", "Dedicated account manager", "SLA guarantee"],
    cta: "Contact Sales",
    popular: false,
  },
];

const BeforeAfterSlider = () => {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lifted group cursor-col-resize select-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition(((e.clientX - rect.left) / rect.width) * 100);
      }}
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const touch = e.touches[0];
        setPosition(((touch.clientX - rect.left) / rect.width) * 100);
      }}
    >
      {/* After */}
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=450&fit=crop"
        alt="After design"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Before */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop"
          alt="Before design"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: `${10000 / position}%` }}
        />
      </div>
      {/* Slider line */}
      <div className="absolute top-0 bottom-0 w-1 bg-primary-foreground shadow-lg" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-foreground shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-3 h-3 text-foreground" />
          <ChevronRight className="w-3 h-3 text-foreground" />
        </div>
      </div>
      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-xs font-semibold text-foreground">Before</div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-xs font-semibold text-foreground">After</div>
    </div>
  );
};

const HomePage = () => {
  const [hoveredStyle, setHoveredStyle] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-orb-drift" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl animate-orb-drift-reverse" />

        {/* Floating furniture silhouettes */}
        {[
          { x: "8%", y: "15%", delay: 0, size: 6 },
          { x: "85%", y: "20%", delay: 1.5, size: 4 },
          { x: "75%", y: "70%", delay: 0.8, size: 5 },
          { x: "12%", y: "75%", delay: 2, size: 3 },
          { x: "50%", y: "8%", delay: 1, size: 4 },
        ].map((p, i) => (
          <div key={i} className="absolute rounded-full bg-primary/5 animate-float pointer-events-none"
            style={{ left: p.x, top: p.y, width: p.size * 8, height: p.size * 8, animationDelay: `${p.delay}s` }} />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" className="text-center lg:text-left">
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Interior Design</span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Design Your Dream{" "}
                <span className="text-gradient-gold">Space with AI</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-xl mb-10">
                Upload your room. Choose your style. Get instant transformation. Professional interior design powered by artificial intelligence.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/login"
                  className="gradient-gold text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold shadow-gold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 group"
                >
                  Start Designing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how-it-works"
                  className="bg-card border border-border/50 text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-muted/50 transition-all duration-300"
                >
                  See How It Works
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeUp} custom={4} className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">2,000+</span>
                  <span className="text-muted-foreground"> designs generated</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Monkey + glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Ambient glow behind monkey */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-3xl animate-pulse-soft" />
                <div className="absolute -inset-4 rounded-full bg-primary/5 blur-2xl animate-glow-pulse" />
                {/* Soft shadow beneath */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-foreground/5 rounded-full blur-md" />
                <AnimatedMonkey isPasswordFocused={false} isUsernameFocused={false} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              See the <span className="text-gradient-gold">Transformation</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">
              Drag the slider to compare before and after AI-generated designs
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <BeforeAfterSlider />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              How It <span className="text-gradient-gold">Works</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform any room
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Upload, step: "01", title: "Upload Image", desc: "Take a photo or upload an image of any room you want to redesign" },
              { icon: Palette, step: "02", title: "Choose Style & Budget", desc: "Select from multiple design styles and set your budget preferences" },
              { icon: Wand2, step: "03", title: "Generate AI Design", desc: "Our AI transforms your space in seconds with stunning results" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative text-center group"
              >
                <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <span className="text-xs font-bold text-primary tracking-wider">STEP {item.step}</span>
                <h3 className="text-xl font-heading font-bold text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Design <span className="text-gradient-gold">Styles</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">
              Explore a wide range of interior design aesthetics
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {designStyles.map((style, i) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredStyle(i)}
                onMouseLeave={() => setHoveredStyle(null)}
              >
                <img src={style.image} alt={style.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300 ${hoveredStyle === i ? "opacity-100" : "opacity-60"}`} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading font-bold text-foreground text-lg">{style.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our <span className="text-gradient-gold">Users Say</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass rounded-2xl p-6 hover:shadow-gold/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-heading font-bold text-sm text-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Simple <span className="text-gradient-gold">Pricing</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">
              Start free. Scale as you grow.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "glass border-primary/30 shadow-gold scale-105"
                    : "glass hover:shadow-lifted"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-gold text-primary-foreground text-xs font-bold shadow-gold">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.popular ? "gradient-gold shadow-gold" : "bg-muted"}`}>
                    <plan.icon className={`w-5 h-5 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">{plan.name}</h3>
                </div>

                <div className="mb-2">
                  <span className="text-4xl font-heading font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "gradient-gold text-primary-foreground shadow-gold hover:scale-[1.02]"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 gradient-gold opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent" />
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Join thousands of users creating stunning interior designs with the power of AI.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-xl text-base font-semibold shadow-lifted hover:scale-[1.02] transition-all duration-300 group"
              >
                Start Designing Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;

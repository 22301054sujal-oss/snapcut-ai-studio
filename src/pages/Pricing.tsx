import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "Perfect for trying it out",
    features: ["5 images per day", "Standard quality", "Basic support", "Watermark-free"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    desc: "For creators and small teams",
    features: ["100 images per day", "HD quality output", "Priority processing", "Email support", "Batch download"],
    cta: "Subscribe to Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₹1,999",
    period: "/month",
    desc: "For agencies and businesses",
    features: ["Unlimited images", "Ultra-HD quality", "API access", "Dedicated support", "Custom integrations", "SLA guarantee"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const creditPacks = [
  { credits: 25, price: "₹199" },
  { credits: 100, price: "₹699" },
  { credits: 500, price: "₹2,999" },
];

const Pricing = () => (
  <main className="bg-section py-20">
    <div className="container">
      <div className="mx-auto mb-14 max-w-lg text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Pricing</h1>
        <p className="mt-3 text-lg text-muted-foreground">Choose the plan that fits your workflow</p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl border p-8 ${
              plan.highlight ? "border-primary bg-card shadow-lg shadow-primary/5 ring-1 ring-primary" : "bg-card"
            }`}
          >
            {plan.highlight && (
              <div className="mb-4 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <h2 className="font-display text-2xl font-bold text-foreground">{plan.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
            <div className="mt-5">
              <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" variant={plan.highlight ? "default" : "outline"}>
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Credit Packs */}
      <div className="mx-auto mt-20 max-w-2xl">
        <h2 className="mb-6 text-center font-display text-2xl font-bold text-foreground">Or buy credit packs</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {creditPacks.map((pack) => (
            <div key={pack.credits} className="rounded-xl border bg-card p-6 text-center">
              <p className="font-display text-3xl font-bold text-foreground">{pack.credits}</p>
              <p className="text-sm text-muted-foreground">credits</p>
              <p className="mt-2 font-display text-xl font-bold text-primary">{pack.price}</p>
              <Button variant="outline" className="mt-4 w-full" size="sm">Buy Now</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default Pricing;

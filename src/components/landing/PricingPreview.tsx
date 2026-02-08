import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["5 images per day", "Standard quality", "Basic support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    features: ["100 images per day", "HD quality output", "Priority processing", "Email support"],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₹1,999",
    period: "/month",
    features: ["Unlimited images", "Ultra-HD quality", "API access", "Dedicated support"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const PricingPreview = () => (
  <section className="bg-section py-20">
    <div className="container">
      <div className="mx-auto mb-12 max-w-lg text-center">
        <h2 className="font-display text-3xl font-bold text-foreground">Simple Pricing</h2>
        <p className="mt-3 text-muted-foreground">Start free, upgrade when you need more</p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl border p-6 ${
              plan.highlight ? "border-primary bg-card shadow-lg shadow-primary/5 ring-1 ring-primary" : "bg-card"
            }`}
          >
            {plan.highlight && (
              <div className="mb-3 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
            <div className="mt-3">
              <span className="font-display text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-success" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to={plan.name === "Free" ? "/editor" : "/pricing"}>
              <Button className="mt-6 w-full" variant={plan.highlight ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingPreview;

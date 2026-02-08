import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="bg-background py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl rounded-2xl border bg-primary p-12 text-center shadow-lg">
        <h2 className="font-display text-3xl font-bold text-primary-foreground">Ready to remove backgrounds?</h2>
        <p className="mt-3 text-primary-foreground/80">
          Start for free — no credit card required. Get your first 5 cutouts today.
        </p>
        <Link to="/editor">
          <Button size="lg" variant="secondary" className="mt-6 gap-2">
            Try SnapCut AI Free
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CtaSection;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background py-20 lg:py-28">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-section px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" />
            AI-Powered Background Removal
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Remove backgrounds{" "}
            <span className="text-primary">in one click</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Upload your image. Get a perfect cutout in seconds. No design skills needed — just clean, professional results powered by AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/editor">
              <Button size="lg" className="gap-2">
                <Upload className="h-4 w-4" />
                Upload Image
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="gap-2">
                View Pricing
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">✓ Free to try · ✓ No signup required · ✓ Instant results</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border shadow-2xl shadow-primary/10">
            <img src={heroImage} alt="AI background removal demo" className="w-full" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

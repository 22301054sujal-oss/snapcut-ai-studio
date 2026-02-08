import { Zap, Shield, ImageIcon, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Results in under 5 seconds, powered by state-of-the-art AI models." },
  { icon: ImageIcon, title: "Pixel-Perfect", desc: "Clean edges, fine hair detail, and transparent outputs every time." },
  { icon: Shield, title: "Privacy First", desc: "Images auto-delete within 24 hours. We never store your data permanently." },
  { icon: Clock, title: "No Learning Curve", desc: "Upload, process, download. It really is that simple." },
];

const Features = () => (
  <section className="bg-background py-20">
    <div className="container">
      <div className="mx-auto mb-12 max-w-lg text-center">
        <h2 className="font-display text-3xl font-bold text-foreground">Why SnapCut AI?</h2>
        <p className="mt-3 text-muted-foreground">Professional background removal without the complexity</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <feat.icon className="mb-4 h-6 w-6 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground">{feat.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

import { Upload, Cpu, Download } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Upload, title: "Upload", desc: "Drag & drop or click to upload your image. Supports JPG, PNG, and WEBP up to 10MB." },
  { icon: Cpu, title: "AI Processing", desc: "Our AI analyzes the image and removes the background in under 5 seconds." },
  { icon: Download, title: "Download", desc: "Preview your result and download a high-quality transparent PNG instantly." },
];

const HowItWorks = () => (
  <section className="bg-section py-20">
    <div className="container">
      <div className="mx-auto mb-12 max-w-lg text-center">
        <h2 className="font-display text-3xl font-bold text-foreground">How It Works</h2>
        <p className="mt-3 text-muted-foreground">Three simple steps to a clean cutout</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-xl border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <step.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="mb-1 font-display text-sm font-semibold text-primary">Step {i + 1}</div>
            <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

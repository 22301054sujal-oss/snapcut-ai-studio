import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-section py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <Scissors className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            SnapCut AI
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            One-click AI background removal. Fast, professional, effortless.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Product</h4>
          <div className="flex flex-col gap-2">
            <Link to="/editor" className="text-sm text-muted-foreground hover:text-primary">Editor</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Account</h4>
          <div className="flex flex-col gap-2">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-primary">Log in</Link>
            <Link to="/signup" className="text-sm text-muted-foreground hover:text-primary">Sign up</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SnapCut AI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

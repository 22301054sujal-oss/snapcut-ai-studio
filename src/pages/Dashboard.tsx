import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link, Navigate } from "react-router-dom";
import { ImageIcon, CreditCard, BarChart3, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const usagePercent = user ? ((user.maxCredits - user.credits) / user.maxCredits) * 100 : 0;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-section py-10">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">Welcome back, {user?.name}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-card p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ImageIcon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Credits Remaining</p>
            <p className="mt-1 font-display text-3xl font-bold text-foreground">{user?.credits}</p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${100 - usagePercent}%` }} />
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
              <BarChart3 className="h-5 w-5 text-accent-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Images Processed</p>
            <p className="mt-1 font-display text-3xl font-bold text-foreground">{user ? user.maxCredits - user.credits : 0}</p>
            <p className="mt-3 text-xs text-muted-foreground">Today</p>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
              <CreditCard className="h-5 w-5 text-success" />
            </div>
            <p className="text-sm text-muted-foreground">Current Plan</p>
            <p className="mt-1 font-display text-3xl font-bold capitalize text-foreground">{user?.plan}</p>
            <Link to="/pricing">
              <Button variant="link" className="mt-2 h-auto p-0 text-sm">
                Upgrade <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-xl border bg-card p-8 text-center">
          <h2 className="font-display text-xl font-bold text-foreground">Ready to remove more backgrounds?</h2>
          <p className="mt-2 text-muted-foreground">Head to the editor to start processing images.</p>
          <Link to="/editor">
            <Button className="mt-4">Open Editor</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

import { Dashboard } from "@/components/customs/dashboard";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <TooltipProvider>
      <Dashboard />
    </TooltipProvider>
  );
}

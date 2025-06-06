import { Button } from "@/components/ui/button";
import { Zap, PlayCircle, GitBranch, Clock, Webhook } from "lucide-react";
import { CreateFlow } from "./create-flow";
import { SelectFlow } from "./select-flow";
import { getFlows } from "@/services/flow-service";
import { SidebarActions } from "./sidebar-actions";

const sidebarButtons = [
  { id: "trigger", label: "Gatilho", icon: Zap },
  { id: "action", label: "Ação", icon: PlayCircle },
  { id: "condition", label: "Condição", icon: GitBranch },
  { id: "delay", label: "Atraso", icon: Clock },
  { id: "webhook", label: "Webhook", icon: Webhook },
];

export async function Sidebar() {
  const flows = await getFlows();

  return (
    <aside className="w-64 p-4 border-r bg-muted">
      <div className="mb-10 space-y-4">
        <CreateFlow />
        <SelectFlow flows={flows} />
      </div>
      <h2 className="font-bold mb-4">Componentes</h2>
      {sidebarButtons.map((button) => (
        <SidebarActions key={button.id} id={button.id} label={button.label}>
          <button.icon className="h-4 w-4" />
        </SidebarActions>
      ))}
    </aside>
  );
}

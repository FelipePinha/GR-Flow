import { Button } from "@/components/ui/button";
import { Zap, PlayCircle, GitBranch, Clock, Webhook } from "lucide-react";
import { CreateFlow } from "./create-flow";

const sidebarButtons = [
  { id: "trigger", label: "Gatilho", icon: Zap },
  { id: "action", label: "Ação", icon: PlayCircle },
  { id: "condition", label: "Condição", icon: GitBranch },
  { id: "delay", label: "Atraso", icon: Clock },
  { id: "webhook", label: "Webhook", icon: Webhook },
];

export function Sidebar() {
  return (
    <aside className="w-64 p-4 border-r bg-muted">
      <CreateFlow />
      <h2 className="font-bold mb-4">Componentes</h2>
      {sidebarButtons.map((button) => (
        <Button
          key={button.id}
          variant="outline"
          className="w-full mb-2 justify-start gap-2"
        >
          <button.icon className="h-4 w-4" />
          {button.label}
        </Button>
      ))}
    </aside>
  );
}

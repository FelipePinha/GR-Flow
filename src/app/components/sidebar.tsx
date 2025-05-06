import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <aside className="w-64 p-4 border-r bg-muted">
      <h2 className="font-bold mb-4">Componentes</h2>
      <Button variant="outline" className="w-full mb-2">
        Gatilho
      </Button>
      <Button variant="outline" className="w-full mb-2">
        Ação
      </Button>
      <Button variant="outline" className="w-full mb-2">
        Condição
      </Button>
      <Button variant="outline" className="w-full mb-2">
        Atraso
      </Button>
      <Button variant="outline" className="w-full mb-2">
        Webhook
      </Button>
    </aside>
  );
}

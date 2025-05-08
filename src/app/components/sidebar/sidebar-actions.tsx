"use client";

import { Button } from "@/components/ui/button";
import { useNodes } from "@/contexts/nodes-context";

interface SidebarActionsProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export function SidebarActions({ id, label, children }: SidebarActionsProps) {
  const { nodes, addNode } = useNodes();

  function handleAddNode() {
    addNode({ id, data: { label }, position: { x: 0, y: 0 } });
  }

  return (
    <Button
      key={id}
      variant="outline"
      className="w-full mb-2 justify-start gap-2"
      onClick={handleAddNode}
    >
      {children}
      {label}
    </Button>
  );
}

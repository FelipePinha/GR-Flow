"use client";
import { useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Background,
  BackgroundVariant,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useNodes } from "@/contexts/nodes-context";

// Exemplo de nodes iniciais

// Exemplo de edges iniciais
// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export function FlowEditor() {
  const { nodes, setNodes } = useNodes();

  const [edges, setEdges] = useEdgesState([]);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background variant={BackgroundVariant.Cross} gap={12} size={1} />
      <Controls />
    </ReactFlow>
  );
}

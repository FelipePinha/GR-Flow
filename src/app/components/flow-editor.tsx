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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// Exemplo de nodes iniciais
const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

// Exemplo de edges iniciais
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export function FlowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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

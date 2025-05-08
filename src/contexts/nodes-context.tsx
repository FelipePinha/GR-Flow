"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Node {
  id: string;
  data: { label: string };
  position: { x: number; y: number };
}

interface NodeContext {
  nodes: Node[];
  setNodes: Dispatch<SetStateAction<Node[]>>;
  addNode: (node: Node) => void;
}

export const NodesContext = createContext<NodeContext | null>(null);

export const NodesProvider = ({ children }: { children: React.ReactNode }) => {
  const [nodes, setNodes] = useState<Node[]>([]);

  const addNode = (node: Node) => {
    setNodes([...nodes, node]);
  };

  return (
    <NodesContext.Provider value={{ nodes, addNode, setNodes }}>
      {children}
    </NodesContext.Provider>
  );
};

export const useNodes = () => {
  const context = useContext(NodesContext);
  if (!context) {
    throw new Error("useNodes must be used within a NodesProvider");
  }
  return context;
};

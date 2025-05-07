interface Position {
  x: number;
  y: number;
}

interface NodeData {
  label: string;
  config: Record<string, any>;
}

interface Node {
  id: string;
  data: NodeData;
  type: string;
  position: Position;
}

interface Edge {
  id: string;
  source: string;
  target: string;
}

interface FlowData {
  edges: Edge[];
  nodes: Node[];
}

interface FlowAttributes {
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  billing: string;
  published: string | boolean | null;
  uid: string;
  data: FlowData;
}

interface Flow {
  id: number;
  attributes: FlowAttributes;
}

// Main type for the array of flows
type Flows = Flow[];

import { ReactFlowProvider } from "@xyflow/react";
import { FlowEditor } from "./components/flow-editor";
import { Sidebar } from "./components/sidebar/sidebar";
import { NodesProvider } from "@/contexts/nodes-context";

export default function Home() {
  return (
    <ReactFlowProvider>
      <NodesProvider>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 h-full">
            <FlowEditor />
          </div>
        </div>
      </NodesProvider>
    </ReactFlowProvider>
  );
}

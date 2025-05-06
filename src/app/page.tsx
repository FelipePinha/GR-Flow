import { FlowEditor } from "./components/flow-editor";
import { Sidebar } from "./components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 h-full">
        <FlowEditor />
      </div>
    </div>
  );
}

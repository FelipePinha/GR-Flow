import { CreateFlowDialog } from "./create-flow-dialog";

export function CreateFlow() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold">Flows</h2>
      <CreateFlowDialog />
    </div>
  );
}

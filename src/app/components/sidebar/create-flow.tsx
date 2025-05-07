import { revalidatePath } from "next/cache";
import { CreateFlowDialog } from "./create-flow-dialog";
import { CreateFlowForm } from "./create-flow-form";

export function CreateFlow() {
  const createFlow = async (name: string) => {
    "use server";

    const response = await fetch("https://api.xbase.app/api/flows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create flow");
    }

    console.log(response);

    revalidatePath("/flows");
  };

  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold">Flows</h2>
      <CreateFlowDialog>
        <CreateFlowForm createFlow={createFlow} />
      </CreateFlowDialog>
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const createFlowSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
});

type CreateFlowFormData = z.infer<typeof createFlowSchema>;

interface CreateFlowFormProps {
  createFlow: (name: string) => Promise<void>;
}

export function CreateFlowForm({ createFlow }: CreateFlowFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateFlowFormData>({
    resolver: zodResolver(createFlowSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: CreateFlowFormData) => {
    try {
      await createFlow(data.name);
      console.log("Fluxo criado com sucesso");
      reset();
    } catch (error) {
      console.error("Erro ao criar fluxo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nome
        </label>
        <Input
          id="name"
          placeholder="Digite o nome do fluxo"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <DialogFooter className="mt-5">
        <Button type="submit">Criar Fluxo</Button>
      </DialogFooter>
    </form>
  );
}

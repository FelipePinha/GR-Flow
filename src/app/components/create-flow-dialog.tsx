"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const createFlowSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres")
    .max(200, "A descrição deve ter no máximo 200 caracteres")
    .optional(),
});

type CreateFlowFormData = z.infer<typeof createFlowSchema>;

export function CreateFlowDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFlowFormData>({
    resolver: zodResolver(createFlowSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: CreateFlowFormData) => {
    try {
      // TODO: Implementar a chamada à API para criar o fluxo
      console.log("Dados do formulário:", data);
    } catch (error) {
      console.error("Erro ao criar fluxo:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Fluxo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar Novo Fluxo</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar um novo fluxo de automação.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome do Fluxo
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

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Descrição
            </label>
            <Input
              id="description"
              placeholder="Digite a descrição do fluxo"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button type="submit">Criar Fluxo</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

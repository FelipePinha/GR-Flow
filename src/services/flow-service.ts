import { api } from "@/lib/axios";

export const getFlows = () => api.get("/flows");

export const getFlowById = (id: string) => api.get(`/flows/${id}`);

export const createFlow = (data: any) => api.post("/flows", data);

export const deleteFlow = (id: string) => api.delete(`/flows/${id}`);

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.xbase.app/api",
});

export const getFlows = () => api.get("/flows");
export const getFlowById = (id: string) => api.get(`/flows/${id}`);
export const updateFlow = (id: string, data: any) =>
  api.put(`/flows/${id}`, data);
export const createFlow = (data: any) => api.post("/flows", data);
export const deleteFlow = (id: string) => api.delete(`/flows/${id}`);

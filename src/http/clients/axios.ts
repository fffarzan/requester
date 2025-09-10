import axios, { type AxiosInstance } from "axios";

export type BaseConfig = {
  baseURL: string;
  headers: Record<string, string>;
  timeout: number;
};

export const createAxios = (config: BaseConfig): AxiosInstance => {
  return axios.create(config);
};

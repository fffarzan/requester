import { axiosService } from "./service/axios.js";

export function endpoint(fn: any) {
  return fn(axiosService);
}

export const http = (name: string, config: any) => {
  const axiosClient = axiosService(config);

  return (endpoint: any) => {
    if (name === "axios") {
      return endpoint(axiosClient);
    }

    throw new Error(`HTTP service ${name} not found`);
  };
};

import { axiosService } from "./service/axios.js";
import { endpoint } from "./utils/endpoint.js";

export const http = (name: string, config: any) => {
  return () => {
    if (name === "axios") {
      const axiosClient = axiosService(config);
      const axiosEndpoint = endpoint(axiosClient);

      return axiosEndpoint;
    }

    throw new Error(`HTTP service ${name} not found`);
  };
};

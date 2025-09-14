import { axiosService } from "./service/axios.js";
import type { RequestConfig } from "./clients/axios.ts";

export type ClientsType = "axios" | "fetch";

export const http = (name: ClientsType, requestConfig: RequestConfig) => {
  let client;

  if (name === "axios") {
    client = axiosService(requestConfig);

    return client;
  }

  throw new Error(`HTTP service ${name} not found`);
};

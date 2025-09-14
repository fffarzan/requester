import { createAxios, type RequestConfig } from "../clients/axios.js";
import {
  deleteMethod,
  getMethod,
  patchMethod,
  postMethod,
  putMethod,
} from "../methods/index.js";

export const axiosService = (config: RequestConfig) => {
  const axiosClient = createAxios(config);

  axiosClient.interceptors.request.use(async (config) => {
    return config;
  });
  axiosClient.interceptors.response.use(async (response) => {
    return response;
  });

  axiosClient.get = getMethod(axiosClient);
  axiosClient.post = postMethod(axiosClient);
  axiosClient.put = putMethod(axiosClient);
  axiosClient.patch = patchMethod(axiosClient);
  axiosClient.delete = deleteMethod(axiosClient);

  return axiosClient;
};

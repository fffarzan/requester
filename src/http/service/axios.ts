import type { AxiosInstance } from "axios";
import { createAxios, type RequestConfig } from "../clients/axios.js";
import { onSendRequest, onRejectedRequest } from "../interceptors/request.js";
import {
  onFulfilledResponse,
  onRejectedResponse,
} from "../interceptors/response.js";
import {
  deleteMethod,
  getMethod,
  patchMethod,
  postMethod,
  putMethod,
} from "../methods/index.js";

export const axiosService = (
  config: RequestConfig,
  requestInterceptors: any = onSendRequest,
  responseInterceptors: any = onFulfilledResponse
) => {
  const axiosClient = createAxios(config);

  axiosClient.interceptors.request.use(requestInterceptors, onRejectedRequest);
  axiosClient.interceptors.response.use(
    responseInterceptors,
    onRejectedResponse
  );
  axiosClient.get = getMethod(axiosClient);
  axiosClient.post = postMethod(axiosClient);
  axiosClient.put = putMethod(axiosClient);
  axiosClient.patch = patchMethod(axiosClient);
  axiosClient.delete = deleteMethod(axiosClient);

  return axiosClient;
};

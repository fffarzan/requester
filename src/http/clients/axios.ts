import axios, { type AxiosInstance, type CreateAxiosDefaults } from "axios";
import { cancelApi } from "../utils/cancelApi.js";

export type BaseRequestConfig = {
  baseURL: string;
};

export type RequestConfig = CreateAxiosDefaults & {
  fullResponse?: boolean;
  debounce?: number;
  cancelable?: boolean;
};

export type ResponseConfig<T> = {
  data?: T;
  status: number;
  statusText?: string;
  headers: Record<string, string>;
  config?: RequestConfig;
};

const defaultRequestConfig: RequestConfig = {
  baseURL: "",
  params: {},
  data: {},
  headers: {},
  url: "",
  method: "",
  transformRequest: [],
  transformResponse: [],
  withCredentials: false,
  responseType: "json",
  responseEncoding: "utf-8",
  maxContentLength: -1,
  maxBodyLength: -1,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxRedirects: 21,
  beforeRedirect: () => {},
  proxy: false,
  signal: cancelApi(30000).signal,
  onUploadProgress: () => {},
  onDownloadProgress: () => {},
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
  },
  adapter: ["xhr", "http", "fetch"],
  timeout: 30000,
  env: {
    FormData: FormData,
  },
  validateStatus: (status: number) => status >= 200 && status < 300,
  allowAbsoluteUrls: true,
  fullResponse: false,
  // retry: 0,
};

export const createAxios = (config: RequestConfig): AxiosInstance => {
  const requestConfig: RequestConfig = {
    ...defaultRequestConfig,
    ...config,
  };

  return axios.create(requestConfig);
};

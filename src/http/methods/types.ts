import type { RequestConfig } from "../clients/axios.ts";

export type HttpOptions = {
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  config?: RequestConfig;
};

export type HttpMethods<T, U> = {
  get: (url: string, options: HttpOptions) => Promise<U>;
  post: (url: string, data: T, options: HttpOptions) => Promise<U>;
  put: (url: string, data: T, options: HttpOptions) => Promise<U>;
  patch: (url: string, data: T, options: HttpOptions) => Promise<U>;
  delete: (url: string, options: HttpOptions) => Promise<U>;
};

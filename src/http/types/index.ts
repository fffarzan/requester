import type { AxiosResponse } from "axios";

export type HttpServiceType = {
  baseURL: string;
  defaultHeaders: Record<string, string>;
  timeout: number;
  get(url: string, config: any): Promise<any>;
  post(url: string, data: any, config: any): Promise<any>;
  put(url: string, data: any, config: any): Promise<any>;
  patch(url: string, data: any, config: any): Promise<any>;
  delete(url: string, config: any): Promise<any>;
  mergeHeaders(customHeaders?: Record<string, string>): Record<string, string>;
  buildUrl(
    url: string,
    params?: Record<string, string | number | boolean>
  ): string;
  createError(
    message: string,
    status?: number,
    statusText?: string,
    data?: unknown
  ): any;
  // Request interceptor hook (can be overridden)
  onRequest(config: any): Promise<any>;
  // Response interceptor hook (can be overridden)
  onResponse(response: any): Promise<any>;
  // Error interceptor hook (can be overridden)
  onError(error: any): Promise<never>;
};

export type ExtraOptions = {
  swr?: boolean;
  query?: boolean;
  queryOptions?: any;
  cancelable?: boolean;
  debounce?: number;
  timeout?: number;
  signal?: any | undefined;
  fullResponse?: boolean;
};

export type Endpoint<T, U> = (
  parameters: T,
  extraOptions?: ExtraOptions
) => Promise<U>;

export type ResponseType<U> = {
  data: U;
};

export type Fn<T, U> = (
  client: any,
  parameters: T,
  options?: ExtraOptions
) => Promise<U> | Promise<AxiosResponse<U>>;

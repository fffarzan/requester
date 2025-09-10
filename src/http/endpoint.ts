import type { AxiosResponse } from "axios";
import { axiosService } from "./httpService";

// export type Client<T> = AxiosStatic & {
// 	lastRequestDate?: Date;
// 	create: (config?: AxiosRequestConfig<T> | undefined) => Client<T>;
// 	timeout: number;
// };

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

export function endpoint<T, U>(
  fn: Fn<T, U>,
  options?: ExtraOptions
): Endpoint<T, U> {
  return (parameters: T, extraOptions: ExtraOptions = {}) => {
    const allOptions = { ...options, ...extraOptions };
    return fn(axiosService, parameters, allOptions);
  };
}

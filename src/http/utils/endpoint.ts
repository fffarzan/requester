import type { AxiosResponse } from "axios";

export type Cb<T, U> = (params: T) => Promise<AxiosResponse<U>>;

export const endpoint =
  <T, U>(cb: Cb<T, U>) =>
  (params: T) =>
    cb(params);

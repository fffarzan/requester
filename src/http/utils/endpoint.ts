import type { AxiosResponse } from "axios";

export const endpoint =
  <T, U>(callbackFn: (parameters: T) => Promise<AxiosResponse<U>>) =>
  (parameters: T) =>
    callbackFn(parameters);

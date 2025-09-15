import { buildUrl } from "../utils/buildUrl.js";
import { mergeHeaders } from "../utils/mergeHeaders.js";
import type { HttpMethods, HttpOptions } from "./types.js";

export const putMethod =
  <T extends HttpMethods<U, V>, U, V>(client: T) =>
  (path: string, data: U, { headers, params, config = {} }: HttpOptions) => {
    const url = buildUrl(path, params);
    const allOptions = {
      ...config,
      headers: mergeHeaders(headers),
    };

    return client.put(url, data, allOptions);
  };

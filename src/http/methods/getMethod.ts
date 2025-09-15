import { buildUrl } from "../utils/buildUrl.js";
import { mergeHeaders } from "../utils/mergeHeaders.js";
import type { HttpMethods, HttpOptions } from "./types.js";

export const getMethod =
  <T extends HttpMethods<void, U>, U>(client: T) =>
  (path: string, { headers, params, config = {} }: HttpOptions) => {
    const url = buildUrl(path, params);
    const allOptions = {
      ...config,
      headers: mergeHeaders(headers),
    };

    return client.get(url, allOptions);
  };

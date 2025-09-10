import { buildUrl } from "../utils/buildUrl.js";
import { mergeHeaders } from "../utils/mergeHeaders.js";

export const putMethod =
  (client: any) => (path: string, data: any, options: any) => {
    options.headers = mergeHeaders(options.headers);
    const url = buildUrl(path, options.params);

    return client.put(url, data, options);
  };

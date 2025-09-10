import { buildUrl } from "../utils/buildUrl.js";
import { mergeHeaders } from "../utils/mergeHeaders.js";

export const postMethod =
  (client: any) => (path: string, data: any, options: any) => {
    options.headers = mergeHeaders(options.headers);
    const url = buildUrl(path, options.params);

    return client.post(url, data, options);
  };

import { buildUrl } from "../utils/buildUrl.js";
import { mergeHeaders } from "../utils/mergeHeaders.js";

export const patchMethod =
  (client: any) => (path: string, data: any, options: any) => {
    options.headers = mergeHeaders(options.headers);
    const url = buildUrl(path, options.params);

    return client.patch(url, data, options);
  };

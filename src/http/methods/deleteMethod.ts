import { buildUrl } from "../utils/buildUrl.js";
import { mergeHeaders } from "../utils/mergeHeaders.js";

export const deleteMethod = (client: any) => (path: string, options: any) => {
  options.headers = mergeHeaders(options.headers);
  const url = buildUrl(path, options.params);

  return client.delete(url, options);
};

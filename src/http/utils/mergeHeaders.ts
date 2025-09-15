export function mergeHeaders(
  customHeaders?: Record<string, string>,
  baseHeaders?: Record<string, string>
): Record<string, string> {
  return {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "User-Agent": "axios/1.11.0",
    "Accept-Encoding": "gzip, compress, deflate, br",
    ...baseHeaders,
    ...customHeaders,
  };
}

export function mergeHeaders(
  customHeaders?: Record<string, string>,
  baseHeaders?: Record<string, string>
): Record<string, string> {
  return {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    ...baseHeaders,
    ...customHeaders,
  };
}

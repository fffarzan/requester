export function mergeHeaders(
	customHeaders?: Record<string, string>,
	defaultHeaders?: Record<string, string>,
): Record<string, string> {
	return {
		...defaultHeaders,
		...customHeaders,
	};
}

export const buildUrl = (
	url: string,
	params?: Record<string, string | number | boolean>,
): string => {
	if (!params || Object.keys(params).length === 0) {
		return url;
	}

	const searchParams = new URLSearchParams();
	Object.entries(params).forEach(([key, value]) => {
		if (value !== null && value !== undefined) {
			searchParams.append(key, String(value));
		}
	});

	const separator = url.includes('?') ? '&' : '?';
	return `${url}${separator}${searchParams.toString()}`;
};

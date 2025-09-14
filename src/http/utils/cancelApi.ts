export function cancelApi(timeout: number) {
  const abortController = new AbortController();

  const timeoutFn = setTimeout(() => {
    abortController.abort();
    clearTimeout(timeoutFn);
  }, timeout || 0);

  return {
    signal: abortController.signal,
    abort: () => {
      clearTimeout(timeoutFn);
      abortController.abort();
    },
  };
}

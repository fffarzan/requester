const onFulfilledResponse = (response: any) => {
  return response;
};

const onRejectedResponse = (error: any) => {
  return Promise.reject(error);
};

export { onFulfilledResponse, onRejectedResponse };

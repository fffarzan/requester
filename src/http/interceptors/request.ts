const onSendRequest = (config: any) => {
  return config;
};

const onRejectedRequest = (error: any) => {
  return Promise.reject(error);
};

export { onSendRequest, onRejectedRequest };

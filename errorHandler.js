export const handleError = (error) => {
  console.error(error);
  return {
    message: error.response?.data?.error || 'Connection failed',
    code: error.response?.status || 500
  };
};
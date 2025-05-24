export const fetchWithRetry = async (url, options, retries = 3) => {
  try {
    return await fetch(url, options);
  } catch (err) {
    return retries > 0 
      ? fetchWithRetry(url, options, retries - 1)
      : Promise.reject(err);
  }
};
import { getToken } from "../utils/token";

const baseURL = process.env.REACT_APP_BASE_URL;

export const req = async (url, options) => {
  const res = await fetch(`${baseURL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  try {
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getHeaders = () => {
  const token = getToken();
  return {
    Authorization: `Bearer ${token}`,
  };
};

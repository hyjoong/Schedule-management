import { getToken } from "../utils/token";

const baseURL = process.env.REACT_APP_BASE_URL;

export const req = async (url, options) => {
  console.log(`최종 받는 url : ${baseURL}${url}`);
  const res = await fetch(`${baseURL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  console.log("res 결과 : ", res);
  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  if (res.status > 299 || res.status < 200) {
    const message = data && data.message ? data.message : "Error";
    const error = new Error(message);
    if (res.status === 401) {
      new Error(message);
      return;
    }
    throw error;
  }
  return data;
};

export const getHeaders = () => {
  const token = getToken();
  return {
    Authorization: `Bearer ${token}`,
  };
};

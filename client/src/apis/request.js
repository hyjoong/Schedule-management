import axios from "axios";
import { getToken } from "../utils/token";

const baseURL = process.env.REACT_APP_BASE_URL;

export const request = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  withCredentials: true,
});

export const req = async (url, options) => {
  const res = await fetch(`${baseURL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
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

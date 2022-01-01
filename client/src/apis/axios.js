import axios from "axios";
import { getToken } from "../utils/token";

const URL = process.env.REACT_APP_BASE_URL;

export const client = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

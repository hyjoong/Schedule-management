import axios from "axios";

export const requestAuth = {
  getUserInfo: async (token) => {
    const response = await axios.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  },

  login: async (email, password) => {
    const response = await axios.post("/login", { email, password });
    const { accessToken } = response.data;
    return accessToken;
  },

  signup: async (email, password) => {
    const response = await axios.post("/signup", { email, password  });
    return response;
  },
};

const API_BASE_URL = import.meta.env.VITE_API_URL;

console.log("API_BASE_URL", API_BASE_URL);

const API_ENDPOINTS = {
  LOGIN: "/authentication/login",
};

export { API_BASE_URL, API_ENDPOINTS };

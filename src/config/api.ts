const API_BASE_URL = process.env.REACT_APP_API_URL;

console.log("API_BASE_URL", API_BASE_URL);

const API_ENDPOINTS = {
  LOGIN: "/authentication/login",
};

export { API_BASE_URL, API_ENDPOINTS };

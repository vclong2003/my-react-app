import { API_HOST } from "../config/api";

export const imageUrl = (imageUrl: string): string => {
  const fullUrl = `${API_HOST}/${imageUrl}`;
  return fullUrl;
};

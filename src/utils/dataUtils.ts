import { API_HOST } from "@config/api";

/**
 * Constructs the full URL for  image
 * @param imageUrl
 * @returns The full URL of the image.
 */
export const imageUrl = (imageUrl: string): string => {
  const fullUrl = `${API_HOST}/${imageUrl}`;
  return fullUrl;
};

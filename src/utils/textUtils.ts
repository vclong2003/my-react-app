/**
 * Capitalizes the first letter of a string.
 *
 * @param text - The input string.
 * @returns The input string with the first letter capitalized.
 */
export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

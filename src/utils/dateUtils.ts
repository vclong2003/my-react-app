/**
 * Convert date to locale string
 * @param date
 * @returns
 */
export const convertDate = (date: string): string => {
  return new Date(date).toLocaleString();
};
/**
 * Convert date to YYYY-MM-DD
 * @param date
 * @returns
 */
export const convertDate = (date: string | Date): string => {
  return new Date(date).toISOString().split("T")[0];
};

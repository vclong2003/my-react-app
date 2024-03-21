/**
 * Saves the user cookie to the local storage.
 * @param user_cookie - The user cookie to save.
 */
export const saveUserCookie = (user_cookie: string) => {
  localStorage.setItem("user_cookie", user_cookie);
};

/**
 * Retrieves the user cookie from the local storage.
 * @returns The user cookie, or null if not found.
 */
export const getUserCookie = (): string | null => {
  return localStorage.getItem("user_cookie");
};

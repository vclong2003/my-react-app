enum EStorageKeys {
  USER_TOKEN = "user_token",
}

/**
 * Saves the user cookie to the local storage.
 * @param token - The user cookie to save.
 */
export const saveUserToken = (token: string) => {
  localStorage.setItem(EStorageKeys.USER_TOKEN, token);
};

/**
 * Retrieves the user cookie from the local storage.
 * @returns The user cookie, or null if not found.
 */
export const getUserToken = (): string | null => {
  return localStorage.getItem(EStorageKeys.USER_TOKEN);
};

/**
 * Removes the user cookie from the local storage.
 */
export const removeUserToken = () => {
  localStorage.removeItem(EStorageKeys.USER_TOKEN);
};

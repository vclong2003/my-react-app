interface IValidationResult {
  isValid: boolean;
  message?: string;
}

export const validateEmail = (email: string): IValidationResult => {
  if (!email) return { isValid: false, message: "Email is required" };

  const regex = /\S+@\S+\.\S+/;
  if (regex.test(email)) return { isValid: true };

  return { isValid: false, message: "Invalid email" };
};

export const validatePassword = (password: string): IValidationResult => {
  if (!password) return { isValid: false, message: "Password is required" };

  if (password.length >= 6) return { isValid: true };

  return { isValid: false, message: "Password must be at least 6 characters" };
};

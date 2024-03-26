export enum EGender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  gender: EGender;
  avatar: string | null;
  region: number;
  state: number;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

// Get Current User -------------------------------------
export interface IGetCurrentUserResponse {
  message: string;
  error: boolean;
  code: number;
  data: IUser & { token: string };
}

// Login ------------------------------------------------
export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  error: boolean;
  code: number;
  data: IUser & { token: string };
}

// Register ------------------------------------------------
export interface IRegisterPayload {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  gender: EGender;
  region: number;
  state: number;
}
export interface IRegisterResponse {
  message: string;
  error: boolean;
  code: number;
  data: IUser & { token: string };
}

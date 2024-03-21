export interface IUser {
  profile_id: string;
  login: string;
  firstName: string;
  lastName: string;
  dateOfLoginAttempt: string;
  countOfLoginAttempts: string;
  forceChangePassword: string;
}

export enum EGender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface IAuthState {
  user: IUser | false | null;
  loading: boolean;
  error: string | null;
}

// Login ------------------------------------------------
export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser | false;
  errors: { email: string } | false;
  success: boolean;
  data: any[];
  user_cookie: string;
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
  data: {
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
    token: string;
  };
}

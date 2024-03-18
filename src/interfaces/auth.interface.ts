import { IUser } from "./user.interface";

export interface IAuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

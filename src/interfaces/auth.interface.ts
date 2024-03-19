import { IUser } from "./user.interface";

export interface IAuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

/*
{
    "user": false,
    "errors": {
        "email": "Invalid email or password."
    },
    "success": false,
    "data": []
}

{
    "user": {
        "profile_id": "9",
        "login": "admin.training@powergatesoftware.com",
        "firstName": "Josh",
        "lastName": "Finamore",
        "dateOfLoginAttempt": "0",
        "countOfLoginAttempts": "0",
        "forceChangePassword": "0"
    },
    "user_cookie": "9.5a8eefea2a1299f87e8e1a74994827840debf897a605c603444091fa519da275",
    "success": true,
    "errors": false,
    "data": []
}
*/

export interface ILoginResponse {
  user: IUser | false;
  errors: { [key: string]: string } | false;
  success: boolean;
  data: any[];
  user_cookie: string;
}

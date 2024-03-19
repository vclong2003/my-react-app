/*
  "profile_id": "9",
  "login": "admin.training@powergatesoftware.com",
  "firstName": "Josh",
  "lastName": "Finamore",
  "dateOfLoginAttempt": "1710816391",
  "countOfLoginAttempts": "1",
  "forceChangePassword": "0"
*/

export interface IUser {
  profile_id: string;
  login: string;
  firstName: string;
  lastName: string;
  dateOfLoginAttempt: string;
  countOfLoginAttempts: string;
  forceChangePassword: string;
}

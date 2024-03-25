import { IRoute } from "../interfaces/common.interface";
import Profile from "../pages/Profile/Profile";

export const privateRoutes: IRoute[] = [
  {
    path: "/",
    component: <Profile />,
  },
];

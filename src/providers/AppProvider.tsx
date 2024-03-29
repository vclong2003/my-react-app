import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@store/index";

import "react-image-crop/dist/ReactCrop.css";
import "@assets/css/global.css";

import UserProvider from "./UserProvider";

interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>{children}</UserProvider>
      </Provider>
    </BrowserRouter>
  );
}

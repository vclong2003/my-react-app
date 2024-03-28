import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import backgroundImage from "@assets/images/login-background.png";

import { ILoginPayload } from "@interfaces/auth.interface";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { login } from "@store/auth/authActions";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.authSlice);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (values: ILoginPayload) => {
    dispatch(login(values))
      .unwrap()
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <S.Container>
      {user && <Navigate to="/" />}
      <S.BackgroundImage src={backgroundImage} />
      <S.FormContainer>
        <S.Title>Hey,Welcome Back!</S.Title>
        <S.RegisterLink to="/register">
          Don't have an account? Register here
        </S.RegisterLink>
        <LoginForm onLogin={handleLogin} loading={isLoading} />
        {error && <S.Error>{error}</S.Error>}
      </S.FormContainer>
    </S.Container>
  );
}

import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import { ILoginPayload } from "@interfaces/user.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { Navigate } from "react-router-dom";

import backgroundImage from "@assets/images/login-background.png";
import { login } from "@store/user/userActions";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.userSlice);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (values: ILoginPayload) => {
    setIsLoading(true);
    setError("");
    dispatch(login(values))
      .unwrap()
      .catch((error) => setError(error.message))
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

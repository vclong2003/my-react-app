import React from "react";
import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import { ILoginPayload } from "../../interfaces/auth.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { login } from "../../store/authSlice";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { user, loading, error } = useSelector(
    (state: RootState) => state.authSlice
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleLogin = (values: ILoginPayload) => {
    dispatch(login(values));
  };

  return (
    <S.Container>
      {user && <Navigate to="/" />}
      <S.BackgroundImage
        src={require("../../assets/images/login-background.png")}
      />
      <S.FormContainer>
        <S.Title>Hey,Welcome Back!</S.Title>
        <S.Subtitle>We are very happy to see you back!</S.Subtitle>
        <LoginForm onLogin={handleLogin} loading={loading} />
        {error && <S.Error>{error}</S.Error>}
      </S.FormContainer>
    </S.Container>
  );
}

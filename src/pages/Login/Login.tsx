import React from "react";
import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import { ILoginPayload } from "../../interfaces/auth.interface";

export default function Login() {
  const handleLogin = (values: ILoginPayload) => {
    console.log(values);
  };

  return (
    <S.Container>
      <S.BackgroundImage
        src={require("../../assets/images/login-background.png")}
      />

      <S.FormContainer>
        <S.Title>Hey,Welcome Back!</S.Title>
        <S.Subtitle>We are very happy to see you back!</S.Subtitle>
        <LoginForm onLogin={handleLogin} />
      </S.FormContainer>
    </S.Container>
  );
}

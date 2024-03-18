import React from "react";
import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
  return (
    <S.Container>
      <S.BackgroundImage
        src={require("../../assets/images/login-background.png")}
      />

      <S.FormContainer>
        <S.Title>Hey,Welcome Back!</S.Title>
        <S.Subtitle>We are very happy to see you back!</S.Subtitle>
        <LoginForm />
      </S.FormContainer>
    </S.Container>
  );
}

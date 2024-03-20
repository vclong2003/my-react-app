import React from "react";
import * as S from "./Register.styled";
import RegisterForm from "./RegisterForm/RegisterForm";

export default function Register() {
  return (
    <S.Container>
      <S.BackgroundImage src={require("../../assets/images/register_bg.png")} />
      <S.FormContainer>
        <RegisterForm />
      </S.FormContainer>
    </S.Container>
  );
}

import * as S from "./Register.styled";
import RegisterForm from "./RegisterForm/RegisterForm";
import backgroundImage from "@assets/images/register_bg.png";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@store/index";
import { IRegisterPayload } from "@interfaces/auth.interface";

import { register } from "@store/auth/authActions";

export default function Register() {
  const { user } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onRegister = (values: IRegisterPayload) => {
    setIsLoading(true);
    dispatch(register(values))
      .unwrap()
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <S.Container>
      {user && <Navigate to="/" />}
      <S.BackgroundImage src={backgroundImage} />
      <S.FormContainer>
        <S.Title>Setup Your Account</S.Title>
        <RegisterForm onRegister={onRegister} loading={isLoading} />
        {error && <S.Error>{error}</S.Error>}
      </S.FormContainer>
    </S.Container>
  );
}

import * as S from "./Register.styled";
import RegisterForm from "./RegisterForm/RegisterForm";
import backgroundImage from "@assets/images/register_bg.png";

import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@store/index";
import { IRegisterPayload } from "@interfaces/auth.interface";

import { register } from "@store/auth/authActions";

export default function Register() {
  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.authSlice
  );
  const dispatch = useDispatch<AppDispatch>();

  const onRegister = (values: IRegisterPayload) => dispatch(register(values));

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

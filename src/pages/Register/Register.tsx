import * as S from "./Register.styled";
import RegisterForm from "./RegisterForm/RegisterForm";
import backgroundImage from "../../assets/images/register_bg.png";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../store";
import { IRegisterPayload } from "../../interfaces/auth.interface";

import { register } from "../../services/api/auth";
import { setUser } from "../../store/authSlice";
import { saveUserToken } from "../../utils/storageUtils";

export default function Register() {
  const { user } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onRegister = async (values: IRegisterPayload) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await register(values);
      saveUserToken(response.data.token);
      dispatch(setUser(response.data));
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
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

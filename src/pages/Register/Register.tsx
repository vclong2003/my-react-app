import * as S from "./Register.styled";
import RegisterForm from "./RegisterForm/RegisterForm";

import backgroundImage from "../../assets/images/register_bg.png";
import { IRegisterPayload } from "../../interfaces/user.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { register } from "@store/user/userActions";

export default function Register() {
  const { user } = useSelector((state: RootState) => state.userSlice);
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (values: IRegisterPayload) => {
    setIsLoading(true);
    setError("");
    dispatch(register(values))
      .unwrap()
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <S.Container>
      {user && <Navigate to="/" />}
      <S.BackgroundImage src={backgroundImage} />
      <S.FormContainer>
        <S.Title>Setup Your Account</S.Title>
        <RegisterForm onRegister={handleRegister} loading={isLoading} />
        {error && <S.Error>{error}</S.Error>}
      </S.FormContainer>
    </S.Container>
  );
}

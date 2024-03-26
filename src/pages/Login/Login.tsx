import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import backgroundImage from "../../assets/images/login-background.png";

import { ILoginPayload } from "../../interfaces/auth.interface";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

import { login } from "../../services/api/auth";
import { setUser } from "../../store/authSlice";
import { saveUserToken } from "../../utils/storageUtils";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.authSlice);

  const [isLoadind, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (values: ILoginPayload) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await login(values);
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
        <S.Title>Hey,Welcome Back!</S.Title>
        <S.RegisterLink to="/register">
          Don't have an account? Register here
        </S.RegisterLink>
        <LoginForm onLogin={handleLogin} loading={isLoadind} />
        {error && <S.Error>{error}</S.Error>}
      </S.FormContainer>
    </S.Container>
  );
}

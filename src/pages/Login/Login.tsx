import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import { ILoginPayload } from "../../interfaces/auth.interface";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Navigate } from "react-router-dom";

import backgroundImage from "../../assets/images/login-background.png";

export default function Login() {
  const { user, loading, error } = useSelector(
    (state: RootState) => state.authSlice
  );
  const handleLogin = (values: ILoginPayload) => {
    console.log(values);
  };

  return (
    <S.Container>
      {user && <Navigate to="/" />}
      <S.BackgroundImage src={backgroundImage} />
      <S.FormContainer>
        <S.Title>Hey,Welcome Back!</S.Title>
        <S.Subtitle>We are very happy to see you back!</S.Subtitle>
        <LoginForm onLogin={handleLogin} loading={loading} />
        {error && <S.Error>{error}</S.Error>}
      </S.FormContainer>
    </S.Container>
  );
}

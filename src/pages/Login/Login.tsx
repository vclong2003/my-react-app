import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import { ILoginPayload } from "../../interfaces/auth.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Navigate } from "react-router-dom";

import backgroundImage from "../../assets/images/login-background.png";
import { login } from "../../services/api/auth";
import { setError, setLoading, setUser } from "../../store/authSlice";
import { saveUserToken } from "../../utils/storageUtils";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, error } = useSelector(
    (state: RootState) => state.authSlice
  );

  const handleLogin = (values: ILoginPayload) => {
    login(values)
      .then((response) => {
        saveUserToken(response.data.token);
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.response.data.message));
      })
      .finally(() => {
        setLoading(false);
      });
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

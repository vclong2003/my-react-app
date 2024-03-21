import * as S from "./Register.styled";
import RegisterForm from "./RegisterForm/RegisterForm";

import backgroundImage from "../../assets/images/register_bg.png";
import { IRegisterPayload } from "../../interfaces/auth.interface";
import { register } from "../../services/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setError, setLoading, setUser } from "../../store/authSlice";
import { Navigate } from "react-router-dom";

export default function Register() {
  const { loading, error, user } = useSelector(
    (state: RootState) => state.authSlice
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleRegister = (values: IRegisterPayload) => {
    dispatch(setLoading(true));
    register(values)
      .then((response) => {
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
        <S.Title>Setup Your Account</S.Title>
        <RegisterForm onRegister={handleRegister} loading={loading} />
        {error && <S.Error>{error}</S.Error>}
      </S.FormContainer>
    </S.Container>
  );
}

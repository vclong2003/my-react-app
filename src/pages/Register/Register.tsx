import * as S from "./Register.styled";
import RegisterForm from "./RegisterForm/RegisterForm";

import backgroundImage from "../../assets/images/register_bg.png";

export default function Register() {
  return (
    <S.Container>
      <S.BackgroundImage src={backgroundImage} />
      <S.FormContainer>
        <RegisterForm />
      </S.FormContainer>
    </S.Container>
  );
}

import * as S from "./Register.styled";
import RegisterForm from "./RegisterForm/RegisterForm";

import backgroundImage from "../../assets/images/register_bg.png";

export default function Register() {
  return (
    <S.Container>
      <S.BackgroundImage src={backgroundImage} />
      <S.FormContainer>
        <S.Title>Setup Your Account</S.Title>
        <RegisterForm
          onRegister={(values) => console.log(values)}
          loading={false}
        />
      </S.FormContainer>
    </S.Container>
  );
}

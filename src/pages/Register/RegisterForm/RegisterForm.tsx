import { EGender, IRegisterPayload } from "../../../interfaces/auth.interface";
import * as S from "./RegisterForm.styled";

const initialValues: IRegisterPayload = {
  email: "",
  password: "",
  name: "",
  repeatPassword: "",
  region: 0,
  state: 0,
  gender: EGender.Male,
};

export default function RegisterForm() {
  return <S.Form>form</S.Form>;
}

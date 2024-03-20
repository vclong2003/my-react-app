import * as S from "./LoginForm.styled";
import { ILoginPayload } from "../../../interfaces/auth.interface";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

interface ILoginFormProps {
  onLogin: (values: ILoginPayload) => void;
  loading?: boolean;
}

const initialValues: ILoginPayload = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string().min(8, "Too short!").required("Required!"),
});

export default function LoginForm({ onLogin, loading }: ILoginFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onLogin(values)}
      validationSchema={LoginSchema}>
      <S.Form>
        <S.FormGroup>
          <S.Label>Email</S.Label>
          <S.Input type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Password</S.Label>
          <S.Input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" />
        </S.FormGroup>
        <S.Button $loading={loading} type="submit">
          LOGIN
        </S.Button>
      </S.Form>
    </Formik>
  );
}

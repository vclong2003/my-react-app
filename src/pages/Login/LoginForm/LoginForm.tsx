import { Formik } from "formik";
import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";

import { ILoginPayload } from "@interfaces/auth.interface";

import { loginSchema } from "@utils/authUtils";

interface ILoginFormProps {
  onLogin: (values: ILoginPayload) => void;
  loading: boolean;
}

const initialValues: ILoginPayload = {
  email: "",
  password: "",
};

export default function LoginForm({ onLogin, loading }: ILoginFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onLogin(values)}
      validationSchema={loginSchema()}>
      <Form>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="email" placeholder="Enter your email" />
          <FormError name="email" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <FormError name="password" />
        </FormGroup>
        <FormButton loading={loading} type="submit">
          LOGIN
        </FormButton>
      </Form>
    </Formik>
  );
}

import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import { ErrorMessage, Formik } from "formik";

import { LoginValidationSchema } from "@utils/authUtils";

import { ILoginPayload } from "@interfaces/user.interface";

const initialValues: ILoginPayload = {
  email: "",
  password: "",
};

interface ILoginFormProps {
  onLogin: (values: ILoginPayload) => void;
  loading: boolean;
}
export default function LoginForm({ onLogin, loading }: ILoginFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onLogin(values)}
      validationSchema={LoginValidationSchema}>
      <Form>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" />
        </FormGroup>
        <FormButton loading={loading} type="submit">
          LOGIN
        </FormButton>
      </Form>
    </Formik>
  );
}

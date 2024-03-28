import { ILoginPayload } from "../../../interfaces/user.interface";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";

interface ILoginFormProps {
  onLogin: (values: ILoginPayload) => void;
  loading: boolean;
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

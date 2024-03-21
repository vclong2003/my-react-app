import { Formik } from "formik";
import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import { EGender, IRegisterPayload } from "../../../interfaces/auth.interface";

interface IRegisterButtonProps {
  onRegister: (values: IRegisterPayload) => void;
  loading: boolean;
}

const initialValues: IRegisterPayload = {
  email: "",
  password: "",
  name: "",
  repeatPassword: "",
  region: 0,
  state: 0,
  gender: EGender.Male,
};

export default function RegisterForm({
  loading,
  onRegister,
}: IRegisterButtonProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onRegister}>
      <Form>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput name="email" type="email" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput name="password" type="password" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Repeat Password</FormLabel>
          <FormInput name="repeatPassword" type="password" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput name="name" />
        </FormGroup>
        <FormButton loading={loading} type="submit">
          Register
        </FormButton>
      </Form>
    </Formik>
  );
}

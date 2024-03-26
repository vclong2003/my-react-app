import { Formik } from "formik";
import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import LocationSelector from "./LocationSelector";
import GenderSelector from "./GenderSelector";

import { EGender, IRegisterPayload } from "../../../interfaces/auth.interface";

import { registerSchema } from "../../../utils/authUtils";

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
    <Formik
      initialValues={initialValues}
      onSubmit={onRegister}
      validationSchema={registerSchema()}>
      <Form>
        {/* Email -------------------------------- */}
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput name="email" type="email" />
          <FormError name="email" />
        </FormGroup>
        {/* Name ------------------------------------------ */}
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput name="name" />
          <FormError name="name" />
        </FormGroup>
        {/* Gender ---------------------------------------- */}
        <GenderSelector />
        {/* Location -------------------------------------- */}
        <LocationSelector />
        {/* Password -------------------------------- */}
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput name="password" type="password" />
          <FormError name="password" />
        </FormGroup>
        {/* Repeat Password -------------------------------- */}
        <FormGroup>
          <FormLabel>Repeat Password</FormLabel>
          <FormInput name="repeatPassword" type="password" />
          <FormError name="repeatPassword" />
        </FormGroup>
        <FormButton loading={loading} type="submit">
          REGISTER
        </FormButton>
      </Form>
    </Formik>
  );
}

import { Formik } from "formik";
import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import { EGender, IRegisterPayload } from "@interfaces/user.interface";
import LocationSelector from "./LocationSelector";
import GenderSelector from "./GenderSelector";
import { RegisterValidationSchema } from "@utils/authUtils";

const initialValues: IRegisterPayload = {
  email: "",
  password: "",
  name: "",
  repeatPassword: "",
  region: 0,
  state: 0,
  gender: EGender.Male,
};

interface IRegisterButtonProps {
  onRegister: (values: IRegisterPayload) => void;
  loading: boolean;
}
export default function RegisterForm({
  loading,
  onRegister,
}: IRegisterButtonProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onRegister}
      validationSchema={RegisterValidationSchema}>
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

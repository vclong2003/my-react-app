import { Formik } from "formik";
import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import { EGender, IRegisterPayload } from "../../../interfaces/user.interface";
import * as Yup from "yup";
import LocationSelector from "./LocationSelector";
import GenderSelector from "./GenderSelector";

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

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
  name: Yup.string().required("Required"),
  region: Yup.number().not([0], "Required").required("Required"),
  state: Yup.number().not([0], "Required").required("Required"),
  gender: Yup.string().required("Required"),
});

export default function RegisterForm({
  loading,
  onRegister,
}: IRegisterButtonProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onRegister}
      validationSchema={RegisterSchema}>
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

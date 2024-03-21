import { ErrorMessage, Formik } from "formik";
import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import { EGender, IRegisterPayload } from "../../../interfaces/auth.interface";

import * as Yup from "yup";
import LocationSelector from "./LocationSelector";
import { capitalize } from "../../../utils/textUtils";

interface IRegisterButtonProps {
  onRegister: (values: IRegisterPayload) => void;
  loading: boolean;
}

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
  name: Yup.string().required("Required"),
  region: Yup.number().not([0], "Required").required("Required"),
  state: Yup.number().not([0], "Required").required("Required"),
});

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
      validationSchema={RegisterSchema}>
      <Form>
        {/* Email -------------------------------- */}
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput name="email" type="email" />
          <ErrorMessage name="email" />
        </FormGroup>
        {/* Name ------------------------------------------ */}
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput name="name" />
          <ErrorMessage name="name" />
        </FormGroup>
        {/* Gender ---------------------------------------- */}
        <FormGroup>
          <FormLabel>Gender</FormLabel>
          <FormInput component="select" name="gender">
            {Object.values(EGender).map((item) => (
              <option key={item} value={item}>
                {capitalize(item)}
              </option>
            ))}
          </FormInput>
          <ErrorMessage name="gender" />
        </FormGroup>
        {/* Location -------------------------------------- */}
        <LocationSelector />
        {/* Password -------------------------------- */}
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput name="password" type="password" />
          <ErrorMessage name="password" />
        </FormGroup>
        {/* Repeat Password -------------------------------- */}
        <FormGroup>
          <FormLabel>Repeat Password</FormLabel>
          <FormInput name="repeatPassword" type="password" />
          <ErrorMessage name="repeatPassword" />
        </FormGroup>

        <FormButton loading={loading} type="submit">
          Register
        </FormButton>
      </Form>
    </Formik>
  );
}

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
import useLocationSelector from "../../../hooks/useLocationSelector";

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
  const { countries, states, onChangeCountryInput } = useLocationSelector();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onRegister}
      validationSchema={RegisterSchema}>
      <Form>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput name="email" type="email" />
          <ErrorMessage name="email" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput name="password" type="password" />
          <ErrorMessage name="password" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Repeat Password</FormLabel>
          <FormInput name="repeatPassword" type="password" />
          <ErrorMessage name="repeatPassword" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput name="name" />
          <ErrorMessage name="name" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Region</FormLabel>
          <FormInput as="select" name="region" onChange={onChangeCountryInput}>
            <option value={0}>Select a region</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </FormInput>
          <ErrorMessage name="region" />
        </FormGroup>
        <FormGroup>
          <FormLabel>State</FormLabel>
          <FormInput as="select" name="state">
            <option value={0}>Select a state</option>
            {states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </FormInput>
          <ErrorMessage name="state" />
        </FormGroup>
        <FormButton loading={loading} type="submit">
          Register
        </FormButton>
      </Form>
    </Formik>
  );
}

import { ErrorMessage, useFormikContext } from "formik";
import {
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import useLocationSelector from "../../../hooks/useLocationSelector";
import { IRegisterPayload } from "../../../interfaces/auth.interface";
import { useEffect } from "react";

export default function LocationSelector() {
  const { countries, states, setCountry } = useLocationSelector();

  const { values, setFieldValue } = useFormikContext<IRegisterPayload>();

  useEffect(() => {
    setCountry(values.region);
    setFieldValue("state", 0);
  }, [values.region]);

  return (
    <>
      {/* Region ----------------------------------------- */}
      <FormGroup>
        <FormLabel>Region</FormLabel>
        <FormInput component="select" name="region">
          <option value={0}>Select a region</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </FormInput>
        <ErrorMessage name="region" />
      </FormGroup>
      {/* State ------------------------------------------ */}
      <FormGroup>
        <FormLabel>State</FormLabel>
        <FormInput component="select" name="state">
          <option value={0}>Select a state</option>
          {states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
        </FormInput>
        <ErrorMessage name="state" />
      </FormGroup>
    </>
  );
}

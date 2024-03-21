import { ErrorMessage } from "formik";
import {
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import { EGender } from "../../../interfaces/auth.interface";
import { capitalize } from "../../../utils/textUtils";

export default function GenderSelector() {
  return (
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
  );
}

import {
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import { EProductStatus } from "../../../interfaces/product.interface";

export default function ProductStatusSelector() {
  return (
    <FormGroup>
      <FormLabel>Status</FormLabel>
      <FormInput component="select" name="status" placeholder="Status">
        <option value="">Select Status</option>
        {Object.values(EProductStatus).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </FormInput>
    </FormGroup>
  );
}

import { IProductFilters } from "../../../interfaces/product.interface";
import * as S from "./ProductFilters.styled";
import { FormInput, FormLabel } from "../../../components/formComponents";
import ProductStatusSelector from "../StatusSelector/StatusSelector";
import { FormGroup } from "../../../components/formComponents/FormGroup/FormGroup.styled";

const intitialValues: IProductFilters = {
  status: "",
  client: "",
  from: "",
  to: "",
  invoice: "",
};

interface IProductFiltersProps {
  onApply: (values: IProductFilters) => void;
}

export default function ProductFilters({ onApply }: IProductFiltersProps) {
  return (
    <S.ProductFilter initialValues={intitialValues} onSubmit={onApply}>
      <S.Form>
        <ProductStatusSelector />
        <FormGroup>
          <FormLabel>Client</FormLabel>
          <FormInput name="client" />
        </FormGroup>
        <FormGroup>
          <FormLabel>From</FormLabel>
          <FormInput name="from" type="date" />
        </FormGroup>
        <FormGroup>
          <FormLabel>To</FormLabel>
          <FormInput name="to" type="date" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Invoice</FormLabel>
          <FormInput name="invoice" />
        </FormGroup>
        <FormGroup>
          <S.ApplyButton type="submit">Apply</S.ApplyButton>
        </FormGroup>
        <FormGroup>
          <S.CancelButton type="reset">Cancel</S.CancelButton>
        </FormGroup>
      </S.Form>
    </S.ProductFilter>
  );
}

import { FormGroup } from "@mui/material";
import { IProductFilters } from "../../../interfaces/product.interface";
import * as S from "./ProductFilters.styled";
import { FormInput, FormLabel } from "../../../components/formComponents";
import ProductStatusSelector from "../StatusSelector/StatusSelector";

const intitialValues: IProductFilters = {
  status: "",
  client: "",
  from: null,
  to: null,
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
      </S.Form>
    </S.ProductFilter>
  );
}

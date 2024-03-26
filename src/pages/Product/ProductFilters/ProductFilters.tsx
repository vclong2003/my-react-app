import { IProductFilter } from "../../../interfaces/product.interface";
import * as S from "./ProductFilters.styled";
import { FormInput, FormLabel } from "../../../components/formComponents";
import ProductStatusSelector from "../StatusSelector/StatusSelector";
import { FormGroup } from "../../../components/formComponents/FormGroup/FormGroup.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setFilter } from "../../../store/product/productSlice";

const intitialValues: IProductFilter = {
  status: "",
  client: "",
  from: "",
  to: "",
  invoice: "",
};

export default function ProductFilters() {
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (values: IProductFilter) => dispatch(setFilter(values));
  const onReset = () => dispatch(setFilter(null));

  return (
    <S.ProductFilter
      initialValues={intitialValues}
      onReset={onReset}
      onSubmit={onSubmit}>
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
          <S.ResetButton type="reset">Reset</S.ResetButton>
        </FormGroup>
      </S.Form>
    </S.ProductFilter>
  );
}

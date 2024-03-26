import {
  EProductStatus,
  IProduct,
} from "../../../interfaces/product.interface";
import * as S from "./ProductForm.styled";
import {
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import ProductStatusSelector from "../StatusSelector/StatusSelector";
import ProductFormUpdater from "./ProductFormUpdater";

interface IProductFormProps {
  onSubmit: (values: Partial<IProduct>) => void;
  product?: IProduct;
}

const initialValues: Partial<IProduct> = {
  order: "",
  client: "",
  status: EProductStatus.Pending,
  total: 0,
  currency: "",
  fundingMethod: "",
};

export default function ProductForm({ product, onSubmit }: IProductFormProps) {
  const handleSubmit = (values: Partial<IProduct>) => {
    if (product) return onSubmit({ id: product.id, ...values });
    return onSubmit(values);
  };

  return (
    <S.ProductForm initialValues={initialValues} onSubmit={handleSubmit}>
      <S.Form>
        <ProductFormUpdater product={product} />
        {/* Order name --------------------------- */}
        <FormGroup>
          <FormLabel>Order</FormLabel>
          <FormInput name="order" type="text" />
          <FormError name="order" />
        </FormGroup>
        {/* Client name --------------------------- */}
        <FormGroup>
          <FormLabel>Client</FormLabel>
          <FormInput name="client" type="text" />
          <FormError name="client" />
        </FormGroup>
        {/* Status -------------------------------- */}
        <ProductStatusSelector />
        {/* Total --------------------------------- */}
        <FormGroup>
          <FormLabel>Total</FormLabel>
          <FormInput name="total" type="number" />
          <FormError name="total" />
        </FormGroup>
        {/* Currency ----------------------------- */}
        <FormGroup>
          <FormLabel>Currency</FormLabel>
          <FormInput name="currency" type="text" />
          <FormError name="currency" />
        </FormGroup>
        {/* Funding method ----------------------- */}
        <FormGroup>
          <FormLabel>Funding Method</FormLabel>
          <FormInput name="fundingMethod" type="text" />
          <FormError name="fundingMethod" />
        </FormGroup>
        {/* Form buttons ------------------------- */}
        <S.BtnsContainer>
          <S.SaveButton type="submit">Save</S.SaveButton>
          <S.CancelButton type="button">Cancel</S.CancelButton>
        </S.BtnsContainer>
      </S.Form>
    </S.ProductForm>
  );
}

import * as S from "./ProductForm.styled";
import { EProductStatus, IProduct } from "@interfaces/product.interface";
import {
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import ProductStatusSelector from "../StatusSelector/StatusSelector";
import ProductFormUpdater from "./ProductFormUpdater";

const initialValues: Partial<IProduct> = {
  order: "",
  client: "",
  status: EProductStatus.Pending,
  total: 0,
  currency: "",
  fundingMethod: "",
};

interface IProductFormProps {
  product?: IProduct;
  error?: string;
  isLoading?: boolean;
  onSubmit: (values: Partial<IProduct>) => void;
  onCancel: () => void;
}

export default function ProductForm({
  error,
  product,
  onSubmit,
  onCancel,
  isLoading,
}: IProductFormProps) {
  const handleSubmit = (values: Partial<IProduct>) => {
    if (product) return onSubmit({ id: product.id, ...values });
    return onSubmit(values);
  };
  return (
    <S.ProductForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onReset={onCancel}>
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
          <S.SaveButton type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Save"}
          </S.SaveButton>
          <S.CancelButton type="reset">Cancel</S.CancelButton>
        </S.BtnsContainer>
        {error && <S.Error>{error}</S.Error>}
      </S.Form>
    </S.ProductForm>
  );
}

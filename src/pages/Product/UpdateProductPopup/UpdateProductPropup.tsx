import ProductForm from "../ProductForm/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "@store/product/productSlice";
import { IProduct, IUpdateProductPayload } from "@interfaces/product.interface";
import { updateProduct } from "@store/product/productActions";
import { useState } from "react";
import Popup from "@components/Popup/Popup";
import { AppDispatch, RootState } from "@store/index";

export default function UpdateProductPopup() {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct } = useSelector(
    (state: RootState) => state.productSlice
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const clearSelectedProduct = () => dispatch(setSelectedProduct(null));
  const update = (values: Partial<IProduct>) => {
    setError("");
    setIsLoading(true);
    dispatch(updateProduct(values as IUpdateProductPayload))
      .unwrap()
      .then(() => clearSelectedProduct())
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <Popup show={selectedProduct !== null} onClose={clearSelectedProduct}>
      <ProductForm
        product={selectedProduct!}
        isLoading={isLoading}
        error={error}
        onSubmit={update}
        onCancel={clearSelectedProduct}
      />
    </Popup>
  );
}

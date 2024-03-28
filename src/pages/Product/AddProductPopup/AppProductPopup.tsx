import { useState } from "react";
import { ICreateProductPayload, IProduct } from "@interfaces/product.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { createProduct } from "@store/product/productActions";
import * as S from "./AddProductPopup.styled";
import ProductForm from "../ProductForm/ProductForm";
import Popup from "@components/Popup/Popup";

export default function AddProductPopup() {
  const dispatch = useDispatch<AppDispatch>();

  const [isOpoupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);
  const addProduct = (values: Partial<IProduct>) => {
    setError("");
    setIsLoading(true);
    dispatch(createProduct(values as ICreateProductPayload))
      .unwrap()
      .then(() => setIsPopupVisible(false))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Popup show={isOpoupVisible} onClose={closePopup}>
        <ProductForm
          isLoading={isLoading}
          error={error}
          onSubmit={addProduct}
          onCancel={closePopup}
        />
      </Popup>
      <S.AddProductBtn onClick={openPopup}>Add Product</S.AddProductBtn>
    </>
  );
}

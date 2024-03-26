import { useDispatch } from "react-redux";
import * as S from "./Product.styled";
import { AppDispatch } from "../../store";
import { useEffect, useState } from "react";
import {
  createProduct,
  getAllProducts,
} from "../../store/product/productActions";
import ProductTable from "./ProductTable/ProductTable";
import UpdateProductPopup from "./UpdateProductPopup/UpdateProductPropup";
import Popup from "../../components/Popup/Popup";
import ProductForm from "./ProductForm/ProductForm";
import {
  ICreateProductPayload,
  IProduct,
} from "../../interfaces/product.interface";

export default function Product() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Add product -----------------------------------------------------
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  const onAddProduct = (values: Partial<IProduct>) => {
    dispatch(createProduct(values as ICreateProductPayload))
      .unwrap()
      .catch((err) => console.log(err.message));
    setIsAddProductVisible(false);
  };
  const onAddProductClick = () => setIsAddProductVisible(true);
  const onCancelAddProduct = () => setIsAddProductVisible(false);

  return (
    <S.Product>
      <Popup
        show={isAddProductVisible}
        onClose={() => setIsAddProductVisible(false)}>
        <ProductForm onSubmit={onAddProduct} onCancel={onCancelAddProduct} />
      </Popup>
      <S.Header>
        <h1>Products</h1>
        <S.AddProductBtn onClick={onAddProductClick}>
          Add Product
        </S.AddProductBtn>
      </S.Header>
      <UpdateProductPopup />
      <S.Container>
        <ProductTable />
      </S.Container>
    </S.Product>
  );
}

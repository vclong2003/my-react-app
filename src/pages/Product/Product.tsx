import { useDispatch } from "react-redux";
import * as S from "./Product.styled";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { getAllProducts } from "../../store/product/productActions";
import ProductTable from "./ProductTable/ProductTable";
import UpdateProductPopup from "./UpdateProductPopup/UpdateProductPropup";

export default function Product() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <S.Product>
      <UpdateProductPopup />
      <S.Container>
        <ProductTable />
      </S.Container>
    </S.Product>
  );
}

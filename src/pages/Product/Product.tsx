import { useDispatch } from "react-redux";
import * as S from "./Product.styled";
import { AppDispatch } from "@store/index";
import { useEffect } from "react";
import { getAllProducts } from "@store/product/productActions";
import ProductTable from "./ProductTable/ProductTable";
import UpdateProductPopup from "./UpdateProductPopup/UpdateProductPropup";
import ProductFilters from "./ProductFilters/ProductFilters";
import AddProductPopup from "./AddProductPopup/AppProductPopup";

export default function Product() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <S.Product>
      <AddProductPopup />
      <S.Header>
        <ProductFilters />
      </S.Header>
      <UpdateProductPopup />
      <S.Container>
        <ProductTable />
      </S.Container>
    </S.Product>
  );
}

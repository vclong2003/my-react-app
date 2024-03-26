import { useDispatch } from "react-redux";
import * as S from "./Product.styled";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { getAllProducts } from "../../store/product/productActions";
import ProductTable from "./ProductTable/ProductTable";
import ProductForm from "./ProductForm/ProductForm";

export default function Product() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <S.Product>
      <S.Container>
        <ProductTable />
      </S.Container>
      <ProductForm />
    </S.Product>
  );
}

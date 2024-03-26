import { useDispatch } from "react-redux";
import * as S from "./Product.styled";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { getAllProducts } from "../../store/product/productActions";
import ProductTable from "./ProductTable/ProductTable";

export default function Product() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <S.Home>
      <S.Container>
        <ProductTable />
      </S.Container>
    </S.Home>
  );
}

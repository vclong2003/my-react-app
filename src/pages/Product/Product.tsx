import { useDispatch } from "react-redux";
import * as S from "./Product.styled";
import { AppDispatch } from "@store/index";
import { useEffect, useState } from "react";
import { getAllProducts } from "@store/product/productActions";
import ProductTable from "./ProductTable/ProductTable";
import UpdateProductPopup from "./UpdateProductPopup/UpdateProductPropup";
import ProductFilters from "./ProductFilters/ProductFilters";
import AddProductPopup from "./AddProductPopup/AppProductPopup";

export default function Product() {
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllProducts()).then(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <S.Product>
      <AddProductPopup />
      <ProductFilters />
      <UpdateProductPopup />
      <ProductTable isLoading={isLoading} />
    </S.Product>
  );
}

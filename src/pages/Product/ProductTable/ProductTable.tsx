import { useSelector } from "react-redux";
import * as S from "./ProductTable.styled";
import { RootState } from "../../../store";
import ProductItem from "./ProductItem/ProductItem";
import ProductTableHeader from "./ProductTableHeader/ProductTableHeader";

const HEADER = [
  "Status",
  "Date",
  "Client",
  "Currency",
  "Total",
  "Invoice #",
  "",
];

export default function ProductTable() {
  const { products } = useSelector((state: RootState) => state.productSlice);

  return (
    <S.Table>
      <S.TableHead>
        <ProductTableHeader columns={HEADER} />
      </S.TableHead>
      <S.TableBody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </S.TableBody>
    </S.Table>
  );
}

import { useSelector } from "react-redux";
import * as S from "./ProductTable.styled";
import { RootState } from "@store/index";
import ProductTableHeader from "./ProductTableHeader/ProductTableHeader";
import { filterProducts } from "@utils/productUtils";
import ProductItemRow from "./ProductItemRow/ProductItemRow";
import Pagination from "@components/Pagination/Pagination";
import { PRODUCT_TABLE_HEADER } from "@variables/product.variable";

export default function ProductTable() {
  const { products, filter } = useSelector(
    (state: RootState) => state.productSlice
  );

  return (
    <>
      <S.Table>
        <S.TableHead>
          <ProductTableHeader columns={PRODUCT_TABLE_HEADER} />
        </S.TableHead>
        <S.TableBody>
          {filterProducts(products, filter).map((product) => (
            <ProductItemRow key={product.id} product={product} />
          ))}
        </S.TableBody>
      </S.Table>
      <S.PaginationContainer>
        <Pagination
          pages={5}
          currentPage={1}
          onPageChange={(page) => console.log(page)}
        />
      </S.PaginationContainer>
    </>
  );
}

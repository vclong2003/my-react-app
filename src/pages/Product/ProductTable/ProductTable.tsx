import { useSelector } from "react-redux";
import * as S from "./ProductTable.styled";
import { RootState } from "@store/index";
import ProductTableHeader from "./ProductTableHeader/ProductTableHeader";
import { filterProducts, paginateProducts } from "@utils/productUtils";
import ProductItemRow from "./ProductItemRow/ProductItemRow";
import Pagination from "@components/Pagination/Pagination";
import {
  PRODUCTS_PER_PAGE,
  PRODUCT_TABLE_HEADER,
} from "@variables/product.variable";
import { useMemo, useState } from "react";
export default function ProductTable() {
  const { products, filter } = useSelector(
    (state: RootState) => state.productSlice
  );

  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(
    () => filterProducts(products, filter),
    [products, filter]
  );
  const paginatedProducts = useMemo(
    () => paginateProducts(filteredProducts, page, PRODUCTS_PER_PAGE),
    [filteredProducts, page]
  );
  const numberOfPages = useMemo(
    () => Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
    [filteredProducts]
  );

  return (
    <>
      <S.Table>
        <S.TableHead>
          <ProductTableHeader columns={PRODUCT_TABLE_HEADER} />
        </S.TableHead>
        <S.TableBody>
          {paginatedProducts.map((product) => (
            <ProductItemRow key={product.id} product={product} />
          ))}
        </S.TableBody>
      </S.Table>
      <S.PaginationContainer>
        <Pagination
          pages={numberOfPages}
          currentPage={page}
          onPageChange={(page) => setPage(page)}
        />
      </S.PaginationContainer>
    </>
  );
}

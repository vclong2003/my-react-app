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
import SkeletonRows from "./SkeletonRows/SkeletonRows";

interface IProductTableProps {
  isLoading: boolean;
}

export default function ProductTable({ isLoading }: IProductTableProps) {
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
        {/* Head ------------------------------------------- */}
        <S.TableHead>
          <ProductTableHeader columns={PRODUCT_TABLE_HEADER} />
        </S.TableHead>
        {/* Body ------------------------------------------- */}
        <S.TableBody>
          {isLoading ? (
            <SkeletonRows />
          ) : (
            paginatedProducts.map((product) => (
              <ProductItemRow key={product.id} product={product} />
            ))
          )}
        </S.TableBody>
      </S.Table>
      {/* Pagination ------------------------------------------- */}
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

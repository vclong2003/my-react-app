import { useDispatch } from "react-redux";
import * as S from "./ProductItemRow.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppDispatch } from "@store/index";
import { IProduct } from "@interfaces/product.interface";
import { deleteProduct } from "@store/product/productActions";
import { convertDate } from "@utils/dateUtils";
import { setSelectedProduct } from "@store/product/productSlice";

interface IProductItemRowProps {
  product: IProduct;
}

export default function ProductItemRow({ product }: IProductItemRowProps) {
  const dispatch = useDispatch<AppDispatch>();

  const { id } = product;

  const onDelete = () => dispatch(deleteProduct({ id }));
  const onEditClick = () => dispatch(setSelectedProduct(product));

  return (
    <S.ProductItem>
      <S.TableCell>{product.status}</S.TableCell>
      <S.TableCell>{convertDate(product.createdAt)}</S.TableCell>
      <S.TableCell>{product.client}</S.TableCell>
      <S.TableCell>{product.currency}</S.TableCell>
      <S.TableCell>{product.total}</S.TableCell>
      <S.TableCell>{product.invoice}</S.TableCell>
      <S.TableCell>
        <S.ActionBtnsContainer>
          <S.EditBtn onClick={onEditClick}>Edit</S.EditBtn>
          <S.DeleteBtn onClick={onDelete}>
            <DeleteIcon />
          </S.DeleteBtn>
        </S.ActionBtnsContainer>
      </S.TableCell>
    </S.ProductItem>
  );
}

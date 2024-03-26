import { useDispatch } from "react-redux";
import * as S from "./ProductItem.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppDispatch } from "../../../../store";
import { IProduct } from "../../../../interfaces/product.interface";
import { getProductTableData } from "../../../../utils/productUtils";
import { deleteProduct } from "../../../../store/product/productActions";

interface IProductItemProps {
  product: IProduct;
}

export default function ProductItem({ product }: IProductItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const { id } = product;

  const onDelete = () => dispatch(deleteProduct({ id }));

  return (
    <S.ProductItem>
      {getProductTableData(product).map((item, index) => (
        <S.TableCell key={index}>{item}</S.TableCell>
      ))}
      <S.ActionBtnsCell>
        <S.ViewDetailBtn>Detail</S.ViewDetailBtn>
        <S.DeleteBtn onClick={onDelete}>
          <DeleteIcon />
        </S.DeleteBtn>
      </S.ActionBtnsCell>
    </S.ProductItem>
  );
}

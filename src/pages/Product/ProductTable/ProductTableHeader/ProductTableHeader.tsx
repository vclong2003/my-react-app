import * as S from "./ProductTableHeader.styled";

interface IProductTableHeaderProps {
  columns: string[];
}

export default function ProductTableHeader({
  columns,
}: IProductTableHeaderProps) {
  return (
    <S.ProductTableHeader>
      {columns.map((column, index) => (
        <S.TableCell key={index}>{column}</S.TableCell>
      ))}
    </S.ProductTableHeader>
  );
}

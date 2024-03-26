import * as S from "./TableRow.styled";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITableRowProps {
  isHeader?: boolean;
  data: string[];
}

export default function TableRow({ data, isHeader }: ITableRowProps) {
  return (
    <S.TableRow>
      {data.map((item, index) => (
        <S.TableCell $isHeader={isHeader} key={index}>
          {item}
        </S.TableCell>
      ))}

      {!isHeader && (
        <S.ActionBtnsCell>
          <S.ViewDetailBtn>Detail</S.ViewDetailBtn>
          <S.DeleteBtn>
            <DeleteIcon />
          </S.DeleteBtn>
        </S.ActionBtnsCell>
      )}
    </S.TableRow>
  );
}

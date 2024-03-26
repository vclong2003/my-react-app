import * as S from "./TableRow.styled";

interface ITableRowProps {
  data: string[];
}

export default function TableRow({ data }: ITableRowProps) {
  return (
    <S.TableRow>
      {data.map((item, index) => (
        <S.TableCell key={index}>{item}</S.TableCell>
      ))}
    </S.TableRow>
  );
}

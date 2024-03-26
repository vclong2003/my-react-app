import * as S from "./TableRow.styled";

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
    </S.TableRow>
  );
}

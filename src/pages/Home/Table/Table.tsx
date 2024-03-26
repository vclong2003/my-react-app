import * as S from "./Table.styled";
import TableRow from "./TableRow/TableRow";

const mockData = ["Mock A", "Mock B", "Mock C", "Mock D", "Mock E", "Mock F"];

export default function Table() {
  return (
    <S.Table>
      <S.TableHead>
        <TableRow
          data={[
            "Header A",
            "Header B",
            "Header C",
            "Header D",
            "Header E",
            "Header F",
          ]}
        />
      </S.TableHead>
      <S.TableBody>
        <TableRow data={mockData} />
        <TableRow data={mockData} />
        <TableRow data={mockData} />
        <TableRow data={mockData} />
        <TableRow data={mockData} />
        <TableRow data={mockData} />
      </S.TableBody>
    </S.Table>
  );
}

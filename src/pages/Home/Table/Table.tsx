import * as S from "./Table.styled";
import TableRow from "./TableRow/TableRow";

const mockData = ["Mock A", "Mock B", "Mock C", "Mock D", "Mock E", "Mock F"];

const header = [
  "Status",
  "Date",
  "Client",
  "Currency",
  "Total",
  "Invoice #",
  "",
];

export default function Table() {
  return (
    <S.Table>
      <S.TableHead>
        <TableRow isHeader={true} data={header} />
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

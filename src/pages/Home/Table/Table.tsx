import { useSelector } from "react-redux";
import * as S from "./Table.styled";
import TableRow from "./TableRow/TableRow";
import { RootState } from "../../../store";
import { getProductTableData } from "../../../utils/productUtils";

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
  const { products } = useSelector((state: RootState) => state.productSlice);

  return (
    <S.Table>
      <S.TableHead>
        <TableRow isHeader={true} data={header} />
      </S.TableHead>
      <S.TableBody>
        {products.map((product) => (
          <TableRow key={product.id} data={getProductTableData(product)} />
        ))}
      </S.TableBody>
    </S.Table>
  );
}

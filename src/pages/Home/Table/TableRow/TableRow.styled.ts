import styled from "styled-components";

import { TableRow as MuiTableRow } from "@mui/material";
import { TableCell as MuiTableCell } from "@mui/material";

export const TableRow = styled(MuiTableRow)``;

interface ITableCellProps {
  $isHeader?: boolean;
}

export const TableCell = styled(MuiTableCell)<ITableCellProps>`
  font-size: var(--fs-md);
  ${({ $isHeader }) => $isHeader && `font-weight: var(--fw-bold);`};
`;

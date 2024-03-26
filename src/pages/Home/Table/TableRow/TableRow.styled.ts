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

export const ActionBtnsCell = styled(MuiTableCell)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--s-6);
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  color: var(--red);
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ViewDetailBtn = styled.button`
  background-color: transparent;
  border: 2px solid var(--gold);
  color: var(--gold);
  padding: var(--s-2) var(--s-5);
  border-radius: var(--br-md);
  cursor: pointer;
`;

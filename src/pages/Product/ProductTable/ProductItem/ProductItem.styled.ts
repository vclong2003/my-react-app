import styled from "styled-components";

import { TableRow as MuiTableRow } from "@mui/material";
import { TableCell as MuiTableCell } from "@mui/material";

export const ProductItem = styled(MuiTableRow)``;

export const TableCell = styled(MuiTableCell)`
  font-size: var(--fs-md);
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

export const EditBtn = styled.button`
  background-color: transparent;
  border: 2px solid var(--gold);
  color: var(--gold);
  padding: var(--s-2) var(--s-5);
  border-radius: var(--br-md);
  cursor: pointer;
`;

import styled from "styled-components";

import { TableRow as MuiTableRow } from "@mui/material";
import { TableCell as MuiTableCell } from "@mui/material";

export const ProductTableHeader = styled(MuiTableRow)``;

export const TableCell = styled(MuiTableCell)`
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
`;

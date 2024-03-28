import styled from "styled-components";

import { Table as MuiTable } from "@mui/material";
import { TableHead as MuiTableHead } from "@mui/material";
import { TableBody as MuiTableBody } from "@mui/material";

export const Table = styled(MuiTable)`
  width: 100%;
  background-color: var(--light-gray);
  overflow: hidden;
  padding: var(--s-4);
  border-radius: var(--br-md);
`;

export const TableHead = styled(MuiTableHead)``;

export const TableBody = styled(MuiTableBody)``;

export const PaginationContainer = styled.div`
  margin: 0 auto;
`;

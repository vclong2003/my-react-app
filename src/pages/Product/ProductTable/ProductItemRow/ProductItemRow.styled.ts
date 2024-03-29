import styled from "styled-components";

import { TableRow as MuiTableRow } from "@mui/material";
import { TableCell as MuiTableCell } from "@mui/material";
import { EProductStatus } from "@interfaces/product.interface";

export const ProductItemRow = styled(MuiTableRow)``;

export const TableCell = styled(MuiTableCell)`
  font-size: var(--fs-md);
`;

interface IStatusColorizerProps {
  $status: EProductStatus;
}
export const StatusColorizer = styled.span<IStatusColorizerProps>`
  color: ${({ $status }) => {
    switch ($status) {
      case EProductStatus.Received:
        return "var(--green)";
      case EProductStatus.Fulfilled:
        return "var(--gold)";
      case EProductStatus.Processing:
        return "var(--red)";
      default:
        return "var(--black)";
    }
  }};
  font-weight: var(--fw-semibold);
`;

export const ActionBtnsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--s-2);
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

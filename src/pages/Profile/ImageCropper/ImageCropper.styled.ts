import styled from "styled-components";
import { FormButton } from "../../../components/formComponents";

export const ImageCropper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  max-height: 65vh !important;
  width: auto;
`;

export const BtnsContainer = styled.div`
  display: flex;
  font-display: row;
  gap: var(--s-2);
  margin-left: auto;
  margin-right: auto;
`;

const BaseBtn = styled(FormButton)`
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  padding: var(--s-2) var(--s-5);
`;

export const ClearButton = styled(BaseBtn)`
  background-color: var(--blue-gray);
`;

export const SaveButton = styled(BaseBtn)`
  background-color: var(--gold);
`;
export const CancelButton = styled(BaseBtn)`
  background-color: var(--ice-blue);
  color: var(--black);
`;

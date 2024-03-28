import styled from "styled-components";
import { FormButton } from "@components/formComponents";

export const ImageCropper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
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

export const SaveButton = styled(BaseBtn)`
  background-color: var(--gold);
`;
export const CancelButton = styled(BaseBtn)`
  background-color: var(--ice-blue);
  color: var(--black);
`;

export const Error = styled.p`
  color: var(--red);
  font-size: var(--fs-md);
`;

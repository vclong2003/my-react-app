import { FormButton } from "@components/formComponents";
import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-5) var(--s-10);
`;

export const LogoutButton = styled(FormButton)`
  background-color: var(--blue-gray);
  margin-left: auto;
`;

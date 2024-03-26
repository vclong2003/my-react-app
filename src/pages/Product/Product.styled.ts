import styled from "styled-components";
import { FormButton } from "../../components/formComponents";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-5) var(--s-10);
`;

export const Container = styled.div`
  width: 100%;
  background-color: var(--light-gray);
  overflow: hidden;
  padding: var(--s-3);
  border-radius: var(--br-md);
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--s-3);
`;

export const AddProductBtn = styled(FormButton)`
  margin-right: auto;
  font-weight: var(--fw-normal);
  font-size: var(--fs-lg);
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  padding: var(--s-2) var(--s-4);
  border-radius: var(--br-md);
  font-size: var(--fs-md);
  cursor: pointer;
  margin: var(--s-2) var(--s-1);
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--s-2);
`;

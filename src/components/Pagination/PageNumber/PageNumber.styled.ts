import styled from "styled-components";

interface IPageNumberProps {
  $isActive: boolean;
}

export const PageNumber = styled.div<IPageNumberProps>`
  cursor: pointer;
  padding: var(--s-2) var(--s-3);
  border-radius: var(--br-md);
  color: var(--white);
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--gold)" : "var(--blue-gray)"};
`;

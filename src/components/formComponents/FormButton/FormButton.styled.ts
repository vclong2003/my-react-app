import styled from "styled-components";

interface IButtonProps {
  $loading?: boolean;
}
export const Button = styled.button<IButtonProps>`
  margin: var(--s-5) 0;
  padding: var(--s-2);
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  background-color: ${(props) =>
    props.$loading ? "var(--blue-gray)" : "var(--gold)"};
  border-radius: var(--br-md);
  color: var(--white);
  cursor: pointer;
`;

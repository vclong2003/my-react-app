import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--s-2) 0;
`;

export const Label = styled.label`
  font-size: var(--fs-xl);
  margin: var(--s-2) 0;
  font-weight: var(--fw-semibold);
  cursor: pointer;
`;

export const Input = styled.input`
  padding: var(--s-3) var(--s-5);
  font-size: var(--fs-md);
  background-color: var(--light-gray);
  border-radius: var(--br-md);
  border: 2px solid var(--ice-blue);
`;

export const Error = styled.span`
  color: var(--red);
  font-size: var(--fs-md);
  margin: var(--s-2) 0;
`;

interface IButtonProps {
  $loading?: boolean;
}
export const Button = styled.button<IButtonProps>`
  margin: var(--s-4) 0;
  padding: var(--s-3);
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  background-color: ${(props) =>
    props.$loading ? "var(--blue-gray)" : "var(--gold)"};
  border-radius: var(--br-md);
  color: var(--white);
`;

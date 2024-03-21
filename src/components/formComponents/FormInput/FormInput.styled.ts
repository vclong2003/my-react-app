import { Field } from "formik";
import styled from "styled-components";

export const Input = styled(Field)`
  padding: var(--s-3) var(--s-5);
  font-size: var(--fs-md);
  background-color: var(--light-gray);
  border-radius: var(--br-md);
  border: 2px solid var(--ice-blue);
`;

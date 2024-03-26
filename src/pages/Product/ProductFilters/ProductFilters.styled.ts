import { Formik, Form as FormikForm } from "formik";
import styled from "styled-components";

export const ProductFilter = styled(Formik)``;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: var(--s-3);
`;

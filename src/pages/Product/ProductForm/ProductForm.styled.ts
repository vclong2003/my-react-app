import styled from "styled-components";
import { FormButton } from "../../../components/formComponents";
import { Formik, Form as FormikForm } from "formik";

export const ProductForm = styled(Formik)``;

export const Form = styled(FormikForm)`
  width: 576px;
`;

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--s-2);
`;

export const SaveButton = styled(FormButton)`
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
`;

export const CancelButton = styled(FormButton)`
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  background-color: var(--light-gray);
`;

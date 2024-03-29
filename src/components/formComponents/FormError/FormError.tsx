import * as S from "./FormError.styled";

import { ErrorMessage } from "formik";

interface IFormErrorProps {
  name: string;
}

export default function FormError({ name }: IFormErrorProps) {
  return <ErrorMessage name={name} component={S.ErrorText} />;
}

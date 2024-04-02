import { ErrorMessage } from "formik";
import * as S from "./FormError.styled";

interface IFormErrorProps {
  name: string;
}

export default function FormError({ name }: IFormErrorProps) {
  return <ErrorMessage name={name} component={S.ErrorText} />;
}

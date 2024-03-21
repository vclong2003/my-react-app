import { HTMLAttributes } from "react";
import * as S from "./Form.styled";

interface IFormProps
  extends HTMLAttributes<HTMLFormElement>,
    JSX.IntrinsicAttributes {}

export default function Form({ ...props }: IFormProps) {
  return <S.FormikForm {...props} />;
}

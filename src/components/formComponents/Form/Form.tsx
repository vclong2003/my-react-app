import * as S from "./Form.styled";

import { HTMLAttributes } from "react";

interface IFormProps
  extends HTMLAttributes<HTMLFormElement>,
    JSX.IntrinsicAttributes {}

export default function Form({ ...props }: IFormProps) {
  return <S.FormikForm {...props} />;
}

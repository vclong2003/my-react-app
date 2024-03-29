import * as S from "./FormInput.styled";

import { InputHTMLAttributes } from "react";

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  component?: string;
}

export default function FormInput({ ...props }: IFormInputProps) {
  return <S.Input {...props} />;
}

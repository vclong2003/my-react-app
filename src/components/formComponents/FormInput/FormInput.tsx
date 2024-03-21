import { InputHTMLAttributes } from "react";
import * as S from "./FormInput.styled";

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: string;
}

export default function FormInput({ ...props }: IFormInputProps) {
  return <S.Input {...props} />;
}

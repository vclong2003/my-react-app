import { ButtonHTMLAttributes } from "react";
import * as S from "./FormButton.styled";

interface IFormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

export default function FormButton({
  children,
  loading,
  ...props
}: IFormButtonProps) {
  return (
    <S.Button $loading={loading} {...props}>
      {children}
    </S.Button>
  );
}

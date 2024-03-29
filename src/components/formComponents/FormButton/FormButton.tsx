import * as S from "./FormButton.styled";

import { ButtonHTMLAttributes } from "react";

interface IFormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
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

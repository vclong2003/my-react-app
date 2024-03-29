import * as S from "./FormLabel.styled";

import { ReactNode } from "react";

interface IFormLabelProps {
  children: ReactNode;
}

export default function FormLabel({ children }: IFormLabelProps) {
  return <S.Label>{children}</S.Label>;
}

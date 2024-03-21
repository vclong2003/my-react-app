import { ReactNode } from "react";
import * as S from "./FormLabel.styled";

interface IFormLabelProps {
  children: ReactNode;
}

export default function FormLabel({ children }: IFormLabelProps) {
  return <S.Label>{children}</S.Label>;
}

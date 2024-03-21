import { ReactNode } from "react";
import * as S from "./FormGroup.styled";

interface IFormGroupProps {
  children: ReactNode;
}

export default function FormGroup({ children }: IFormGroupProps) {
  return <S.FormGroup>{children}</S.FormGroup>;
}

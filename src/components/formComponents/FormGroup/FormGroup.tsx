import * as S from "./FormGroup.styled";

import { ReactNode } from "react";

interface IFormGroupProps {
  children: ReactNode;
}
export default function FormGroup({ children }: IFormGroupProps) {
  return <S.FormGroup>{children}</S.FormGroup>;
}

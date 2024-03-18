import React, { ButtonHTMLAttributes, ClassAttributes } from "react";
import * as S from "./Button.styled";

export default function Button(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
) {
  return <S.Button />;
}

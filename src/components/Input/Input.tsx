import React, { ClassAttributes, InputHTMLAttributes } from "react";
import * as S from "./Input.styled";

export default function Input(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
) {
  return <S.Input />;
}

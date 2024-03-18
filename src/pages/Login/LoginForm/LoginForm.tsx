import React from "react";
import * as S from "./LoginForm.styled";

export default function LoginForm() {
  return (
    <S.Form>
      <S.FormGroup>
        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="password">Password</S.Label>
        <S.Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
      </S.FormGroup>
      <S.Button type="button">LOGIN</S.Button>
    </S.Form>
  );
}

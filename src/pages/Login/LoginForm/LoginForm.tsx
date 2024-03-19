import React, { ChangeEvent, FormEvent, useState } from "react";
import * as S from "./LoginForm.styled";
import { ILoginPayload } from "../../../interfaces/auth.interface";
import { validateEmail, validatePassword } from "../../../utils/auth.utils";

interface ILoginFormProps {
  onLogin: (values: ILoginPayload) => void;
  loading?: boolean;
}

interface IFormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm({ onLogin, loading }: ILoginFormProps) {
  const [errors, setErrors] = useState<IFormErrors>({});
  const [values, setValues] = useState<ILoginPayload>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setErrors({});
    const emailValidation = validateEmail(values.email);
    const passwordValidation = validatePassword(values.password);
    if (!emailValidation.isValid) {
      setErrors({ email: emailValidation.message });
      return;
    }
    if (!passwordValidation.isValid) {
      setErrors({ password: passwordValidation.message });
      return;
    }

    onLogin(values);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormGroup>
        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValues({ ...values, email: e.target.value })
          }
        />
        {errors.email && <S.Error>{errors.email}</S.Error>}
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="password">Password</S.Label>
        <S.Input
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValues({ ...values, password: e.target.value })
          }
        />
        {errors.password && <S.Error>{errors.password}</S.Error>}
      </S.FormGroup>
      <S.Button loading={loading} type="submit">
        LOGIN
      </S.Button>
    </S.Form>
  );
}

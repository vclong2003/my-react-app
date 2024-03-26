import * as Yup from "yup";

// Validation schemas ------------------------------------------------
export const loginSchema = () =>
  Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Required!"),
    password: Yup.string().min(8, "Too short!").required("Required!"),
  });

export const registerSchema = () =>
  Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
    name: Yup.string().required("Required"),
    region: Yup.number().not([0], "Required").required("Required"),
    state: Yup.number().not([0], "Required").required("Required"),
    gender: Yup.string().required("Required"),
  });

import * as yup from "yup";

export const registerSchema = yup
  .object({
    username: yup
      .string()
      .required("Username is required.")
      .min(5, "Username should be at least 5 characters."),
    email: yup
      .string()
      .required("Email is reqeuired.")
      .matches(/^[^@]+@[^@]+\.[^@.]{2,}$/, "Not a valid email address."),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password should ne at least 6 character."),
  })
  .required();
export const loginSchema = yup
  .object({
    identifier: yup
      .string()
      .required("Email is reqeuired.")
      .matches(/^[^@]+@[^@]+\.[^@.]{2,}$/, "Not a valid email address."),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password should ne at least 6 character."),
  })
  .required();

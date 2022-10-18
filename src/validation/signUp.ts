import * as yup from "yup";

export const SignupSchema = yup
  .object({
    firstName: yup
      .string()
      .required("please provide a first name")
      .matches(/^[a-z ,.'-]+$/i, "the first name should only contain letters"),
    lastName: yup
      .string()
      .required("please provide a last name")
      .matches(/^[a-z ,.'-]+$/i, "the last name should only contain letters"),
    age: yup
      .number()
      .required()
      .positive()
      .integer()
      .min(18)
      .max(99)
      .typeError("please provide an age"),
    email: yup.string().email().required("please provide an email"),
  })
  .required();

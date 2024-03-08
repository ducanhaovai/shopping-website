import type { RegisterOptions, UseFormGetValues } from "react-hook-form";
import * as yup from "yup";

type Rules = {
  [key in "email" | "password" | "confirm_password"]?: RegisterOptions;
};

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: "Email are reqiure!",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email is not in correct format!",
    },
    maxLength: {
      value: 160,
      message: "Length from 5-160 characters",
    },
    minLength: {
      value: 5,
      message: "Length from 5-160 characters",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password are reqiure!",
    },
    maxLength: {
      value: 160,
      message: "Length from 6-160 characters",
    },
    minLength: {
      value: 5,
      message: "Length from 6-160 characters",
    },
  },
  confirm_password: {
    required: {
      value: true,
      message: "Password re-entering is required!",
    },
    maxLength: {
      value: 160,
      message: "Length from 6-160 characters",
    },
    minLength: {
      value: 5,
      message: "Length from 6-160 characters",
    },
    validate:
      typeof getValues === "function"
        ? (value) =>
            value === getValues("password") || "Re enter password not right"
        : undefined,
  },
});

export const schema = yup.object({
  email: yup
    .string()
    .required("Email are require")
    .email("")
    .min(5, "Length from 5-160 characters")
    .max(160),
  password: yup
    .string()
    .required("Password are reqiure!")
    .min(6, "Length from 6-160 characters")
    .max(160, "Length from 6-160 characters"),
  confirm_password: yup
    .string()
    .required("Password re-entering is required!!")
    .min(6, "Length from 6-160 characters")
    .max(160, "Length from 6-160 characters")
    .oneOf([yup.ref("password")], "Re enter password not right"),
});

export type Schema = yup.InferType<typeof schema>;

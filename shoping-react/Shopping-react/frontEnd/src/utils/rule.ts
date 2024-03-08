import type { RegisterOptions, UseFormGetValues } from "react-hook-form";

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

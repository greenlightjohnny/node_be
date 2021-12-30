import { object, string } from "zod";

const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is requried",
    }),
    password: string({
      required_error: "Password is requried",
    }).min(6, "Password nees to be at least 6 chars"),
    passwordConfirmation: string({
      required_error: "Password confirmation is requried",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Email is not valid"),
  }),
});

export default createUserSchema;

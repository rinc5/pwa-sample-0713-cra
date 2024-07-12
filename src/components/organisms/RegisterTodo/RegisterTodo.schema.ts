import { z } from "zod";

export const RegisterTodoSchema = z
  .object({
    title: z
      .string()
      .min(1, "必須入力項目です")
      .max(20, "20文字以内で入力してください"),
  })
  .required({
    title: true,
  });

export type RegisterTodoInputType = z.infer<typeof RegisterTodoSchema>;

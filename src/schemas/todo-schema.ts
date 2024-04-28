import { z } from "zod";

export const todoSchema = z.object({
  id: z.string().uuid(),
  value: z.string(),
});

export type ToDoType = z.infer<typeof todoSchema>;

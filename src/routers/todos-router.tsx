import { randomUUID } from "crypto";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

import { todosList } from "~/state/todos-state";
import type { ToDoType } from "~/schemas/todo-schema";
import { ToDoItem } from "~/components/to-do-item";

export const todos = new Hono();

todos.post(
  "/",
  zValidator(
    "form",
    z.object({
      value: z.string().min(1),
    }),
  ),
  async (c) => {
    const { value } = c.req.valid("form");

    const todo: ToDoType = {
      id: randomUUID(),
      value,
    };

    todosList.push(todo);

    return c.render(<ToDoItem index={todosList.length} todo={todo} />);
  },
);

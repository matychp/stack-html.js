import { randomUUID } from "node:crypto";
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

todos.delete(
  "/:id",
  zValidator(
    "param",
    z.object({
      id: z.string(),
    }),
  ),
  (c) => {
    const { id } = c.req.valid("param");

    const index = todosList.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return c.render(<>Error</>);
    }

    todosList.splice(index, 1);

    c.status(200);

    return c.render(<></>);
  },
);

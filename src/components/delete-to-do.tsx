import type { ToDoType } from "~/schemas/todo-schema";

interface DeleteToDoProps {
  todo: ToDoType;
}

export function DeleteToDo({ todo }: DeleteToDoProps) {
  return (
    <button
      hx-delete={`/todos/${todo.id}`}
      hx-target="closest .item"
      hx-swap="outerHTML"
    >
      <img src="/static/icons/trash.svg" />
    </button>
  );
}

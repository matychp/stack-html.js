import type { ToDoType } from "~/schemas/todo-schema";

interface ToDoItemProps {
  index: number;
  todo: ToDoType;
}

export function ToDoItem({ index, todo }: ToDoItemProps) {
  return (
    <li>
      {index}: {todo.value}
    </li>
  );
}

import type { ToDoType } from "~/schemas/todo-schema";
import { DeleteToDo } from "./delete-to-do";

interface ToDoItemProps {
  index: number;
  todo: ToDoType;
}

export function ToDoItem({ index, todo }: ToDoItemProps) {
  return (
    <li className="item flex items-center gap-2">
      <span>{index}:</span>
      <span className="grow">{todo.value}</span>
      <DeleteToDo todo={todo} />
    </li>
  );
}

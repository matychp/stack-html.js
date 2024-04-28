import { todosList } from "~/state/todos-state";
import { ToDoItem } from "./to-do-item";

export function ToDosList() {
  return (
    <ol id="todos-list">
      {todosList.map((todo, index) => (
        <ToDoItem index={index + 1} todo={todo} />
      ))}
    </ol>
  );
}

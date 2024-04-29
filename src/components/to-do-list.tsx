import { todosList } from "~/state/todos-state";
import { ToDoItem } from "./to-do-item";

export function ToDosList() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-4">To do's</h1>
      <ol id="todos-list" className="mx-4 flex gap-2 flex-col">
        {todosList.map((todo, index) => (
          <ToDoItem index={index + 1} todo={todo} />
        ))}
      </ol>
    </>
  );
}

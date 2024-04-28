import { AddToDo } from "~/components/add-to-do";
import { ToDosList } from "~/components/to-do-list";

export function Home() {
  return (
    <>
      <AddToDo />
      <ToDosList />
    </>
  );
}

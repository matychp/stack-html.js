export function AddToDo() {
  return (
    <form
      className="flex flex-col"
      hx-post="/todos"
      hx-target="#todos-list"
      hx-swap="beforeend"
    >
      <span>Add a new todo:</span>
      <input
        type="text"
        name="value"
        placeholder="Buy eggs, go to the gym, ..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export function AddToDo() {
  return (
    <form
      className="flex flex-col"
      hx-post="/todos"
      hx-target="#todos-list"
      hx-swap="beforeend"
    >
      <label for="value">Add a todo:</label>
      <input
        type="text"
        name="value"
        placeholder="Buy eggs, go to the gym, ..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

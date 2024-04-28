const todosList: string[] = [];

export function ToDoList() {
  if (todosList.length === 0) {
    return <span>List is empty</span>;
  }

  return (
    <ul>
      {todosList.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}

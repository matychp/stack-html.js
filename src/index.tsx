import { Hono } from "hono";

import { renderer } from "./renderer";
import { ToDoList } from "./components/to-do-list";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<ToDoList />);
});

export default app;

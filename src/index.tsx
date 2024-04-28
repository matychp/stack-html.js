import { Hono } from "hono";

import { renderer } from "~/renderer";
import { Home } from "~/pages/home";
import { todos } from "~/routers/todos-router";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<Home />);
});

app.route("/todos", todos);

export default app;

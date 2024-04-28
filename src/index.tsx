import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<h1 className="bg-red-500">Hello!</h1>);
});

export default app;

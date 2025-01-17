import accounts  from "./accounts";
import {handle} from "hono/vercel"
import { Hono } from "hono"
// export const runtime = "edge";
const app = new Hono().basePath('/api')

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app)
export type AppType = typeof routes;
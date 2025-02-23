import Koa from 'koa';
import dotenv from 'dotenv';
import cors from "@koa/cors";
const app = new Koa();
app.use(cors());
dotenv.config();
export default app;

import Router from "@koa/router";
import Koa from 'koa';
import { test } from '../controllers/http.js';

const router = new Router;

router.get("/", async (ctx: Koa.Context) => {
  ctx.body = `Available routes:
 - /test`;
});

router.get("/test", test);

export default router;
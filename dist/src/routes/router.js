import Router from "@koa/router";
import { test } from '../controllers/http.js';
const router = new Router;
router.get("/", async (ctx) => {
    ctx.body = `Available routes:
 - /test`;
});
router.get("/test", test);
export default router;

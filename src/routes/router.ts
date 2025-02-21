import Router from "@koa/router";
import Koa from 'koa';
import scraperController from '../controllers/scrape.js';
import routes from "../utils/routes.js";

const router = new Router;

router.get("/", async (ctx: Koa.Context) => {
  ctx.body = routes;
});

router.post("/scrape", scraperController.scrapeRequest);

export default router;
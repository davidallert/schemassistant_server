import Koa from 'koa';
import scraperService from '../services/scrape.js';
import aiService from '../services/ai.js';

interface RequestBody {
  url: string;
};

const scraperController = {
  scrapeRequest: async (ctx: Koa.Context) => {
    const requestBody: RequestBody = ctx.request.body as RequestBody;
    const html = await scraperService.scrape(requestBody.url);
    const result = await aiService.generateSchema(html);

    console.log(result);

    ctx.body = {
      data: html,
    };
    ctx.type = 'application/json';
  },
};

export default scraperController;

// https://www.elgiganten.se/product/datorer-kontor/datorer/laptop/lenovo-ideapad-3-15iau7-i3-128128-156-barbar-dator/641676

// https://benhoyt.com/cv/

// https://www.teknikproffset.se/hemelektronik/ljud-bild/horlurar/horlurar-3/stilrena-over-ear-horlurar-rosa
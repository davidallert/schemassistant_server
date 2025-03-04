import Koa from 'koa';
import scraperService from '../services/scrape.js';
import geminiService from '../services/gemini.js';

interface RequestBody {
  url: string;
};

const scraperController = {
  scrapeRequest: async (ctx: Koa.Context) => {
    // Calculate request size.
    const requestSize = Buffer.byteLength(JSON.stringify(ctx.request.body));

    const requestBody: RequestBody = ctx.request.body as RequestBody;
    const html = await scraperService.scrape(requestBody.url) || "";
    const result = await geminiService.generateSchema(html);

    ctx.body = result;
    ctx.type = 'application/json';

    // Calculate response size.
    const responseSize = Buffer.byteLength(JSON.stringify(ctx.response.body))

    // Calculate total size and log all data.
    console.log('requestSize', requestSize)
    console.log('responseSize', responseSize)
    console.log('total', (requestSize + responseSize))
  },
};

export default scraperController;

// https://www.elgiganten.se/product/datorer-kontor/datorer/laptop/lenovo-ideapad-3-15iau7-i3-128128-156-barbar-dator/641676

// https://benhoyt.com/cv/

// https://www.teknikproffset.se/hemelektronik/ljud-bild/horlurar/horlurar-3/stilrena-over-ear-horlurar-rosa
import playwright from 'playwright';
import * as cheerio from 'cheerio';

const scraperService = {
  scrape: async (url: string) => {
    const browser = await playwright.chromium.launch({headless: true});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);
    $('style').remove(); // Remove CSS.

    // Find all existing JSON Linked Data scripts.
    const jsonLdScripts = $('script[type="application/ld+json"]');

    // TODO Test if string, string is valid or if string, unknown would be better suited. Depends on whether websites follow the schema docs or not.
    const jsonLdObjects: Record<string, string>[] = [];

    jsonLdScripts.each((i, el) => { // .each is a Cheerio built-in function.
      const jsonLdContent = $(el).text(); // Convert elements into strings.
      const jsonLdObject = JSON.parse(jsonLdContent); // Convert strings into objects.
      const jsonLdType = jsonLdObject?.['@context'] || "";
      const schemaRegex = /^https?:\/\/schema\.org\//;
      if (schemaRegex.test(jsonLdType.toLowerCase())) {
        jsonLdObjects.push(jsonLdObject);
      }
    });

    $('script').remove(); // Remove remaining scripts.

    // console.log(jsonLdObjects);

    // console.log($.html().length); // Get the number of characters. Could be displayed in the frontend?
    // $.html() current HTML in the Cheerio object.

    return $.html();
  }
};

export default scraperService;
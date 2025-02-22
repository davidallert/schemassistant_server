import app from './app.js';
import router from './src/routes/router.js';
import bodyParser from 'koa-bodyparser';

const PORT = process.env.PORT || 3001;

app.use(async (ctx, next) => {
  ctx.set("X-Frame-Options", "DENY"); // Prevent clickjacking
  ctx.set("X-Content-Type-Options", "nosniff"); // Prevent MIME-type sniffing
  ctx.set("X-XSS-Protection", "1; mode=block"); // Protect against XSS
  await next();
});

app.use(async (ctx, next) => {
  try {
    await next(); // Need to call next to continue processing.
  } catch (error: unknown) {
    if (error instanceof Error) {
    console.error("Error:", error);
    ctx.body = { message: error.message || "Internal Server Error" };
    }
  }
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

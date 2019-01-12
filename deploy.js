const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const app = new koa();
const router = new Router();
const process = require('child_process');

// route
router.post('/', function(ctx) {
  process.spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run',  'deploy']);
  ctx.body = 'update success';
});

app.use(bodyParser());
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001, function() {
  console.log('[server] deploy server starting at 3001');
});

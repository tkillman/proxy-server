import express, { Express, Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const proxyMiddleware = createProxyMiddleware<Request, Response>({
  target: 'http://top-shop.logiall.com',
  changeOrigin: true,
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

app.use('/', proxyMiddleware);

module.exports = app;

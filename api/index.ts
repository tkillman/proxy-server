import express, { Express, Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const proxyMiddleware = createProxyMiddleware<Request, Response>({
  target: 'http://top-shop.logiall.com',
  changeOrigin: true,
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

app.use('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.use('/api', (req, res) => {
  res.status(200).send('Hello, World api!');
});

app.use('/keep', proxyMiddleware);

module.exports = app;

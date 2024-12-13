const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

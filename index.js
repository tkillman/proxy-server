const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// app.use(
//   '/', // 프록시 경로 (예: http://localhost:3000/proxy)
//   createProxyMiddleware({
//     //target: 'https://naver.com', // 타겟 웹사이트
//     target: 'https://daum.net', // 타겟 웹사이트
//     changeOrigin: true, // 호스트 헤더 변경
//     on: {
//       proxyReq: (proxyReq, req, res) => {
//         proxyReq.setHeader('version', 'staging');
//       },
//     },
//     pathRewrite: {
//       '^/': '/', // 경로 재작성
//     },
//   })
// );

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

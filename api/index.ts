const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

//Proxy 설정
app.use(
  '/', // 프록시 경로 (예: http://localhost:3000/proxy)
  createProxyMiddleware({
    //target: 'https://naver.com', // 타겟 웹사이트
    target: 'https://top-shop.logiall.com', // 타겟 웹사이트
    changeOrigin: true, // 호스트 헤더 변경
    on: {
      proxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('version', 'staging');
      },
    },
    pathRewrite: {
      '^/api': '/', // 경로 재작성
    },
  })
);

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;

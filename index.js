const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy 설정
app.use(
  '/', // 프록시 경로 (예: http://localhost:3000/proxy)
  createProxyMiddleware({
    target: 'https://top-shop.logiall.com', // 타겟 웹사이트
    changeOrigin: true, // 호스트 헤더 변경
    on: {
      proxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('version', 'staging');
      },
    },
    pathRewrite: {
      '/': '', // /proxy를 제거하고 타겟 URL로 전달
    },
  })
);

// 기본 포트 설정
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});

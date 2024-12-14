"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const app = (0, express_1.default)();
const proxyMiddleware = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: 'http://top-shop.logiall.com',
    changeOrigin: true,
});
app.listen(3000, () => console.log('Server ready on port 3000.'));
app.use('/', proxyMiddleware);
module.exports = app;

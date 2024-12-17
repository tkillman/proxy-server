import express, { Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

const proxyMiddleware = createProxyMiddleware<Request, Response>({
  target: "https://top-shop.logiall.com",
  changeOrigin: true,
  on: {
    proxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader("version", "staging");

      res.redirect("https://top-shop.logiall.com/#/login");
    },
  },
});

app.use("/", proxyMiddleware);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

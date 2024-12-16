import axios from "axios";
import express, { Express, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// const proxyMiddleware = createProxyMiddleware<Request, Response>({
//   target: 'https://top-shop.logiall.com',
//   changeOrigin: true,
//   on: {
//     proxyReq: (proxyReq, req, res) => {
//       proxyReq.setHeader('version', 'staging');
//     },
//   },
// });

// app.use('/', proxyMiddleware);

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get("https://top-shop.logiall.com"); // 외부 URL
    res.status(response.status).send(response.data); // 클라이언트에게 전달
  } catch (error) {
    res.status(500).send("Error fetching the external page");
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

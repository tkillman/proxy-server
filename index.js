// Pinboard API proxy.
// For whatever reason the Pinboard API (https://pinboard.in/howto/#api) doesn't
// have CORS enabled — so you can't make API calls directly from the browser.
// This small server proxies requests to the Pinboard API allowing CORS.

// Create a proxy to redirect requests of the "/api/*" path to the Pinboard API.
// Examples:
// GET /api/v1/posts/all?format=json → https://api.pinboard.in/v1/posts/all?format=json
import { createProxyMiddleware } from 'http-proxy-middleware';
import NextCors from 'nextjs-cors';

const apiProxy = createProxyMiddleware({
  target: 'https://top-shop.logiall.com',
  changeOrigin: true,
  pathRewrite: {
    '^/': '', // Strip "/api" from the URL
  }
});

// In Vercel, any file inside the "api" directory is mapped to "/api" and
// will be treated as an API endpoint.
// By default, on Vercel this "/api" endpoint would strictly match only "/api"
// requestes (ignoring sub-paths like "/api/hello"). So, to proxy the entire
// path, we add a rewrite in "vercel.json" to allow the "api" directory to catch
// all "/api/*" requests.
export default async function (req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*'
  });
  // Proxy "/api/*" requests to the pinboard API.
  return apiProxy(req, res);
}

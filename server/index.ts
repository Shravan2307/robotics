import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure default NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || "production";

export function createServerApp() {
  const app = express();

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  return app;
}

export const app = createServerApp();

export async function startServer() {
  const server = createServer(app);
  const port = process.env.PORT || 3000;

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
      resolve(server);
    });
  });
}

// Only start the server when run directly in Node (not on Vercel or in test/serverless environments)
if (!process.env.VERCEL && process.env.NODE_ENV !== "test") {
  startServer().catch(console.error);
}


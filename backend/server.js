import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { blogRoutes } from './routes/blogRoutesWorker.js';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: ['https://blogs-2ce.pages.dev', 'http://localhost:3000'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.route('/api/blogs', blogRoutes);

app.get('/test-db', async (c) => {
  try {
    const { results } = await c.env.DB
      .prepare("SELECT * FROM blogs LIMIT 1;")
      .all();

    return c.json({ ok: true, results });
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
});

// Health check
app.get('/', (c) => {
  return c.json({ message: 'Blogs API is running!' });
});

export default app; 
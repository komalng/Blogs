import { Hono } from 'hono';
import { handleGetAllBlogs, handleGetBlogById } from '../controllers/blogControllerWorker.js';

const blogRoutes = new Hono();

blogRoutes.get('/', handleGetAllBlogs);
blogRoutes.get('/:id', handleGetBlogById);
// blogRoutes.post('/', handleCreateBlog);

export { blogRoutes }; 
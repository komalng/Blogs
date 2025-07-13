// For Cloudflare Workers, we'll use D1 database instead of MongoDB
// This is a simplified version - you'll need to set up D1 database in Cloudflare

const handleGetAllBlogs = async (c) => {
  try {
    // For now, return mock data
    // In production, you'd query your D1 database
    const blogs = [
      {
        id: 1,
        title: "Getting Started with Vue.js 3",
        content: "Vue.js 3 introduces the Composition API...",
        excerpt: "Learn the fundamentals of Vue.js 3 and the new Composition API for building modern web applications.",
        author: "Sarah Johnson",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        category: "Frontend Development",
        readTime: 8,
        publishDate: new Date().toISOString()
      },
      {
        id: 2,
        title: "Building RESTful APIs with Express.js",
        content: "Express.js is a minimal and flexible Node.js web application framework...",
        excerpt: "Master Express.js to create powerful and scalable RESTful APIs for your web applications.",
        author: "Michael Chen",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
        category: "Backend Development",
        readTime: 12,
        publishDate: new Date().toISOString()
      }
    ];
    
    return c.json(blogs);
  } catch (error) {
    return c.json({ message: "Error fetching blogs", error: error.message }, 500);
  }
};

const handleGetBlogById = async (c) => {
  try {
    const id = c.req.param('id');
    
    // Mock blog data - replace with D1 database query
    const blog = {
      id: parseInt(id),
      title: "Getting Started with Vue.js 3",
      content: "Vue.js 3 introduces the Composition API, which provides a more flexible way to organize component logic...",
      excerpt: "Learn the fundamentals of Vue.js 3 and the new Composition API for building modern web applications.",
      author: "Sarah Johnson",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      category: "Frontend Development",
      readTime: 8,
      publishDate: new Date().toISOString()
    };
    
    return c.json(blog);
  } catch (error) {
    return c.json({ message: "Error fetching blog", error: error.message }, 500);
  }
};

const handleCreateBlog = async (c) => {
  try {
    const body = await c.req.json();
    
    // Mock blog creation - replace with D1 database insert
    const newBlog = {
      id: Date.now(),
      ...body,
      publishDate: new Date().toISOString()
    };
    
    return c.json(newBlog, 201);
  } catch (error) {
    return c.json({ message: "Error creating blog", error: error.message }, 500);
  }
};

export { handleGetAllBlogs, handleGetBlogById, handleCreateBlog }; 
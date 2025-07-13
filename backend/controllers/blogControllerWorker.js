import data from '../data.json' assert { type: "json" };


const handleGetAllBlogs = async (c) => {
  try {
    const blogs = data.data
    
    return c.json(blogs);
  } catch (error) {
    return c.json({ message: "Error fetching blogs", error: error.message }, 500);
  }
};

const handleGetBlogById = async (c) => {
  try {
    const id = c.req.param('id');
    const blog = data.data.filter(item => item._id === parseInt(id));
    
    return c.json(blog);
  } catch (error) {
    return c.json({ message: "Error fetching blog", error: error.message }, 500);
  }
};

const handleCreateBlog = async (c) => {
  try {
    const body = await c.req.json();
    
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
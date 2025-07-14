
const handleGetAllBlogs = async (c) => {
  try {
    const db = c.env.DB;

    const { results } = await db.prepare("SELECT * FROM blogs;").all();
    return c.json(results);
  } catch (error) {
    return c.json(
      { message: "Error fetching blogs", error: error.message },
      500
    );
  }
};

const handleGetBlogById = async (c) => {
  try {
    const db = c.env.DB;
    const id = c.req.param("id");
    const {results} = await db.prepare("SELECT * FROM blogs WHERE id = ?").bind(id).all();
    if(results.length === 0) {
      return c.json({message: "Blog not found"}, 404)
    }
    return c.json(results[0])
  } catch (error) {
    return c.json(
      { message: "Error fetching blog", error: error.message },
      500
    );
  }
};

// const handleCreateBlog = async (c) => {
//   try {
//     const body = await c.req.json();

//     const newBlog = {
//       id: Date.now(),
//       ...body,
//       publishDate: new Date().toISOString(),
//     };

//     return c.json(newBlog, 201);
//   } catch (error) {
//     return c.json(
//       { message: "Error creating blog", error: error.message },
//       500
//     );
//   }
// };

export { handleGetAllBlogs, handleGetBlogById };

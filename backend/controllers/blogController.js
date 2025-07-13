const Blog = require("../models/blog");

const handleGetAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ publishDate: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error: error.message });
  }
};

const handleGetBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error: error.message });
  }
};

const handleCreateBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error: error.message });
  }
};

const handleSeedData = async (req, res) => {
    try {
        // Clear existing data
        await Blog.deleteMany({});
        
        // Insert mock data
        const mockBlogs = [
          {
            title: "Getting Started with Vue.js 3",
            content: "Vue.js 3 introduces the Composition API, which provides a more flexible way to organize component logic. This new API allows you to group related logic together, making your components more maintainable and easier to test. In this comprehensive guide, we'll explore the key features of Vue.js 3, including the Composition API, Teleport, Fragments, and more. We'll also look at how to migrate from Vue.js 2 and best practices for building scalable applications.",
            excerpt: "Learn the fundamentals of Vue.js 3 and the new Composition API for building modern web applications.",
            author: "Sarah Johnson",
            imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
            category: "Frontend Development",
            readTime: 8
          },
          {
            title: "Building RESTful APIs with Express.js",
            content: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. In this detailed tutorial, we'll cover everything from setting up a basic Express server to implementing advanced features like middleware, authentication, error handling, and database integration. We'll also explore best practices for API design and security considerations.",
            excerpt: "Master Express.js to create powerful and scalable RESTful APIs for your web applications.",
            author: "Michael Chen",
            imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
            category: "Backend Development",
            readTime: 12
          },
          {
            title: "Modern CSS with Tailwind CSS",
            content: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. This framework provides low-level utility classes that let you build completely custom designs without ever leaving your HTML. In this guide, we'll explore how to set up Tailwind CSS, understand its utility classes, and build beautiful, responsive interfaces efficiently. We'll also cover advanced topics like custom configurations and component extraction.",
            excerpt: "Discover how Tailwind CSS can revolutionize your styling workflow and create beautiful designs faster.",
            author: "Emily Rodriguez",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
            category: "CSS & Design",
            readTime: 10
          },
          {
            title: "MongoDB Best Practices for Node.js Applications",
            content: "MongoDB is a popular NoSQL database that works great with Node.js applications. In this comprehensive guide, we'll cover MongoDB best practices including schema design, indexing strategies, connection management, and performance optimization. We'll also explore Mongoose ODM for better data modeling and validation. Learn how to structure your data efficiently and avoid common pitfalls when working with MongoDB in production environments.",
            excerpt: "Learn essential MongoDB practices to optimize your Node.js applications and improve database performance.",
            author: "David Kim",
            imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
            category: "Database",
            readTime: 15
          },
          {
            title: "Vue.js State Management with Pinia",
            content: "Pinia is the official state management library for Vue.js, replacing Vuex in Vue 3 applications. It provides a more intuitive and type-safe way to manage application state. In this tutorial, we'll explore how to set up Pinia, create stores, and integrate them with Vue components. We'll also cover advanced topics like store composition, plugins, and testing strategies for state management.",
            excerpt: "Master Pinia for efficient state management in your Vue.js 3 applications with this comprehensive guide.",
            author: "Lisa Wang",
            imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
            category: "Frontend Development",
            readTime: 11
          },
          {
            title: "Deploying Node.js Applications to Production",
            content: "Deploying Node.js applications to production requires careful planning and consideration of various factors including environment configuration, process management, monitoring, and security. In this guide, we'll cover different deployment strategies, from traditional VPS deployments to modern cloud platforms. We'll also discuss Docker containerization, CI/CD pipelines, and production monitoring tools.",
            excerpt: "Learn the essential steps and best practices for deploying your Node.js applications to production safely.",
            author: "Alex Thompson",
            imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
            category: "DevOps",
            readTime: 14
          }
        ];
        
        const blogs = await Blog.insertMany(mockBlogs);
        res.json({ message: 'Database seeded successfully', count: blogs.length });
      }  catch (error) {
    res.status(500).json({ message: "Error creating blog", error: error.message });
  }
};

module.exports = { handleGetAllBlogs, handleGetBlogById, handleCreateBlog, handleSeedData };
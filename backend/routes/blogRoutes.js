const express = require("express");
const router = express.Router();
const { handleGetAllBlogs, handleGetBlogById, handleCreateBlog } = require("../controllers/blogController");

router.get("/", handleGetAllBlogs);
router.get("/:id", handleGetBlogById);
router.post("/", handleCreateBlog);

module.exports = router;
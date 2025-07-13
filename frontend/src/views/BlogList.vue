<template>
  <div>
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Discover Amazing Blogs</h1>
      <p class="text-xl text-gray-600">Explore our collection of insightful articles</p>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center py-12">
      <div class="text-red-600 text-lg mb-4">{{ error }}</div>
      <button @click="fetchBlogs" class="btn-primary">Try Again</button>
    </div>

    <!-- Blog grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="blog in blogs" 
        :key="blog._id" 
        class="card overflow-hidden cursor-pointer group"
        @click="viewBlog(blog._id)"
      >
        <div class="relative overflow-hidden">
          <img 
            :src="blog.imageUrl" 
            :alt="blog.title"
            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute top-4 left-4">
            <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {{ blog.category }}
            </span>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-500 mb-3">
            <span>{{ blog.author }}</span>
            <span class="mx-2">•</span>
            <span>{{ formatDate(blog.publishDate) }}</span>
            <span class="mx-2">•</span>
            <span>{{ blog.readTime }} min read</span>
          </div>
          
          <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {{ blog.title }}
          </h3>
          
          <p class="text-gray-600 line-clamp-3">
            {{ blog.excerpt }}
          </p>
          
          <div class="mt-4">
            <span class="text-primary-600 font-medium group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="!loading && !error && blogs.length === 0" class="text-center py-12">
      <div class="text-gray-500 text-lg">No blogs found</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogList',
  data() {
    return {
      blogs: [],
      loading: true,
      error: null
    }
  },
  async mounted() {
    await this.fetchBlogs()
  },
  methods: {
    async fetchBlogs() {
      try {
        this.loading = true
        this.error = null
        const response = await axios.get('http://localhost:5000/api/blogs')
        this.blogs = response.data
      } catch (err) {
        this.error = 'Failed to load blogs. Please try again.'
        console.error('Error fetching blogs:', err)
      } finally {
        this.loading = false
      }
    },
    viewBlog(id) {
      this.$router.push(`/blog/${id}`)
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
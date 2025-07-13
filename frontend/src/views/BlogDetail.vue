<template>
  <div>
    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center py-12">
      <div class="text-red-600 text-lg mb-4">{{ error }}</div>
      <button @click="fetchBlog" class="btn-primary">Try Again</button>
    </div>

    <!-- Blog content -->
    <div v-else-if="blog" class="max-w-4xl mx-auto">
      <!-- Back button -->
      <button 
        @click="$router.go(-1)" 
        class="flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blogs
      </button>

      <!-- Blog header -->
      <div class="mb-8">
        <div class="flex items-center text-sm text-gray-500 mb-4">
          <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-medium">
            {{ blog.category }}
          </span>
          <span class="mx-3">•</span>
          <span>{{ blog.author }}</span>
          <span class="mx-3">•</span>
          <span>{{ formatDate(blog.publishDate) }}</span>
          <span class="mx-3">•</span>
          <span>{{ blog.readTime }} min read</span>
        </div>
        
        <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ blog.title }}</h1>
        
        <p class="text-xl text-gray-600 leading-relaxed">{{ blog.excerpt }}</p>
      </div>

      <!-- Blog image -->
      <div class="mb-8">
        <img 
          :src="blog.imageUrl" 
          :alt="blog.title"
          class="w-full h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      <!-- Blog content -->
      <div class="prose prose-lg max-w-none">
        <div class="bg-white rounded-xl shadow-sm p-8">
          <div class="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {{ blog.content }}
          </div>
        </div>
      </div>

      <!-- Author info -->
      <div class="mt-12 bg-gray-50 rounded-xl p-6">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {{ blog.author.charAt(0) }}
          </div>
          <div class="ml-4">
            <h3 class="font-semibold text-gray-900">{{ blog.author }}</h3>
            <p class="text-gray-600">Author</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogDetail',
  data() {
    return {
      blog: null,
      loading: true,
      error: null
    }
  },
  async mounted() {
    await this.fetchBlog()
  },
  methods: {
    async fetchBlog() {
      try {
        this.loading = true
        this.error = null
        const id = this.$route.params.id
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`)
        this.blog = response.data
      } catch (err) {
        this.error = 'Failed to load blog. Please try again.'
        console.error('Error fetching blog:', err)
      } finally {
        this.loading = false
      }
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
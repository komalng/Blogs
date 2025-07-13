import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import components
import BlogList from './views/BlogList.vue'
import BlogDetail from './views/BlogDetail.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: BlogList },
    { path: '/blog/:id', component: BlogDetail }
  ]
})

// Create and mount app
createApp(App)
  .use(router)
  .mount('#app')
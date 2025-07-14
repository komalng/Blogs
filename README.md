# 📝 Blogs List

A modern, responsive blog listing application built with Vue.js 3 and Hono, featuring a clean design and seamless user experience.

![Vue.js](https://img.shields.io/badge/Vue.js-3.3.4-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-3.12.0-000000?style=for-the-badge&logo=hono&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🚀 Live Demo

- **Frontend**: [Deployed on Cloudflare Pages](https://your-frontend-domain.pages.dev)
- **Backend API**: [Deployed on Cloudflare Workers](https://your-worker-domain.workers.dev)

## ✨ Features

### Frontend (Vue.js 3)
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- 📱 **Mobile-First**: Optimized for all device sizes
- ⚡ **Fast Loading**: Built with Vite for optimal performance
- 🧭 **Client-Side Routing**: Smooth navigation with Vue Router
- 📊 **Blog List View**: Grid layout with blog cards
- 📖 **Blog Detail View**: Full article display with metadata
- 🔍 **Search & Filter**: Find blogs by category or author
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### Backend (Hono)
- 🛠️ **RESTful API**: Clean, well-structured endpoints using Hono framework
- 🗄️ **Database Integration**: MongoDB with Mongoose ODM
- 🔒 **CORS Support**: Cross-origin resource sharing enabled
- 📝 **Blog Management**: CRUD operations for blog posts
- 🚀 **Cloudflare Workers Ready**: Optimized for serverless deployment
- 🔧 **Environment Configuration**: Flexible configuration management

## 🏗️ Project Structure

```
blogs-list/
├── frontend/                 # Vue.js 3 Frontend
│   ├── src/
│   │   ├── views/
│   │   │   ├── BlogList.vue      # Blog listing page
│   │   │   └── BlogDetail.vue    # Individual blog view
│   │   ├── App.vue              # Main application component
│   │   ├── main.js              # Application entry point
│   │   └── style.css            # Global styles
│   ├── public/
│   ├── package.json
│   ├── vite.config.js          # Vite configuration
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── wrangler.toml           # Cloudflare Pages config
├── backend/                   # Hono Backend
│   ├── controllers/
│   │   └── blogControllerWorker.js   # Blog API controllers
│   ├── routes/
│   │   └── blogRoutesWorker.js       # API route definitions
│   ├── models/
│   │   └── blog.js             # Blog data model
│   ├── db/
│   │   └── connection.js       # Database connection
│   ├── server.js               # Hono server setup
│   ├── package.json
│   └── wrangler.toml           # Cloudflare Workers config
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **Hono** - Fast, lightweight web framework for Cloudflare Workers
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Cloudflare Workers** - Serverless deployment platform

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (for local development)
- Cloudflare account (for deployment)

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blogs-list.git
   cd blogs-list
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🌐 API Endpoints

### Blog Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/blogs` | Get all blogs |
| `GET` | `/api/blogs/:id` | Get blog by ID |
| `POST` | `/api/blogs` | Create new blog |
| `PUT` | `/api/blogs/:id` | Update blog |
| `DELETE` | `/api/blogs/:id` | Delete blog |

### Example API Response

```json
{
  "id": "1",
  "title": "Getting Started with Vue.js 3",
  "content": "Vue.js 3 introduces the Composition API...",
  "excerpt": "Learn the fundamentals of Vue.js 3...",
  "author": "Sarah Johnson",
  "imageUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  "category": "Frontend Development",
  "readTime": 8,
  "publishDate": "2024-01-15T10:30:00.000Z"
}
```

## 🚀 Deployment

### Frontend Deployment (Cloudflare Pages)

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

### Backend Deployment (Cloudflare Workers)

1. **Deploy the worker**
   ```bash
   cd backend
   wrangler deploy
   ```

2. **Set environment variables**
   ```bash
   wrangler secret put MONGODB_URI
   wrangler secret put JWT_SECRET
   ```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:

1. **Modifying Tailwind config**
   ```bash
   # Edit frontend/tailwind.config.js
   ```

2. **Adding custom CSS**
   ```bash
   # Edit frontend/src/style.css
   ```

### Adding New Features

1. **New API endpoints**
   - Add routes in `backend/routes/`
   - Create controllers in `backend/controllers/`

2. **New frontend pages**
   - Add Vue components in `frontend/src/views/`
   - Update router configuration in `frontend/src/main.js`

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)
```env
VITE_API_URL=https://your-worker-domain.workers.dev
VITE_APP_TITLE=Blogs List
```

#### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/blogs-list
PORT=5000
NODE_ENV=development
```

## 🧪 Development

### Available Scripts

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

#### Backend
```bash
npm run dev          # Start development server with Wrangler
npm run deploy       # Deploy to Cloudflare Workers
npm run deploy:staging # Deploy to staging environment
```

### Code Style
- **Frontend**: Vue.js 3 Composition API
- **Backend**: Hono framework with ES modules
- **Styling**: Tailwind CSS utility classes
- **Formatting**: Prettier (recommended)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [Hono](https://hono.dev/) - Fast, lightweight web framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling
- [Cloudflare](https://cloudflare.com/) - Web infrastructure and security


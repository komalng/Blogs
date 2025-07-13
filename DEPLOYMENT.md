# Cloudflare Deployment Guide

This guide will help you deploy your Vue.js frontend and Express.js backend to Cloudflare.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)
3. **Node.js**: Version 16 or higher
4. **Wrangler CLI**: Cloudflare's command-line tool

## Installation

### Install Wrangler CLI
```bash
npm install -g wrangler
```

### Login to Cloudflare
```bash
wrangler login
```

## Frontend Deployment (Cloudflare Pages)

### 1. Build the Frontend
```bash
cd frontend
npm install
npm run build
```

### 2. Deploy to Cloudflare Pages

#### Option A: Via Cloudflare Dashboard
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Connect your Git repository
4. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `frontend`
5. Click **Save and Deploy**

#### Option B: Via Wrangler CLI
```bash
cd frontend
wrangler pages deploy dist --project-name=your-project-name
```

### 3. Configure Environment Variables
In your Cloudflare Pages dashboard:
1. Go to **Settings** → **Environment variables**
2. Add your backend API URL:
   - **Variable name**: `VITE_API_URL`
   - **Value**: `https://your-worker-domain.your-subdomain.workers.dev`

## Backend Deployment (Cloudflare Workers)

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Database (Optional)
For production, consider using Cloudflare D1 database:

```bash
# Create D1 database
wrangler d1 create blogs-db

# Add database binding to wrangler.toml
# [[d1_databases]]
# binding = "DB"
# database_name = "blogs-db"
# database_id = "your-database-id"
```

### 3. Deploy the Worker
```bash
cd backend
wrangler deploy
```

### 4. Set Environment Variables
```bash
# Set secrets (if using MongoDB)
wrangler secret put MONGODB_URI

# Set other environment variables
wrangler secret put JWT_SECRET
```

## Configuration Files

### Frontend Configuration
- `_headers`: Configures caching and security headers
- `_redirects`: Handles Vue Router client-side routing
- `vite.config.js`: Optimized for production builds

### Backend Configuration
- `wrangler.toml`: Cloudflare Workers configuration
- `src/index.js`: Main Worker entry point
- `routes/blogRoutesWorker.js`: API routes for Workers
- `controllers/blogControllerWorker.js`: API controllers

## Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://your-worker-domain.your-subdomain.workers.dev
```

### Backend (Wrangler Secrets)
```bash
wrangler secret put MONGODB_URI
wrangler secret put JWT_SECRET
```

## Custom Domains

### Frontend (Cloudflare Pages)
1. Go to Pages dashboard
2. Navigate to **Custom domains**
3. Add your domain
4. Configure DNS settings

### Backend (Cloudflare Workers)
1. Go to Workers dashboard
2. Navigate to **Settings** → **Triggers**
3. Add custom domain
4. Configure DNS settings

## Monitoring and Analytics

### Cloudflare Analytics
- **Pages Analytics**: View frontend performance
- **Workers Analytics**: Monitor API usage and performance
- **Real User Monitoring**: Track user experience

### Logs
```bash
# View Worker logs
wrangler tail

# View specific Worker logs
wrangler tail --format=pretty
```

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Update CORS configuration in `src/index.js`
   - Add your frontend domain to allowed origins

2. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

3. **Database Connection Issues**
   - Verify MongoDB connection string
   - Check network connectivity
   - Consider using Cloudflare D1 for better compatibility

### Debug Commands
```bash
# Test Worker locally
wrangler dev

# Check Worker configuration
wrangler whoami

# List all Workers
wrangler list
```

## Performance Optimization

### Frontend
- Enable Cloudflare's CDN
- Configure proper caching headers
- Use image optimization
- Enable compression

### Backend
- Use Cloudflare's edge caching
- Optimize database queries
- Implement proper error handling
- Use Workers KV for caching

## Security Considerations

1. **Environment Variables**: Never commit secrets to Git
2. **CORS**: Configure allowed origins properly
3. **Rate Limiting**: Implement API rate limiting
4. **Input Validation**: Validate all user inputs
5. **HTTPS**: Always use HTTPS in production

## Cost Optimization

- **Pages**: Free tier includes 500 builds/month
- **Workers**: Free tier includes 100,000 requests/day
- **D1**: Free tier includes 1 database and 100,000 reads/day
- **KV**: Free tier includes 100,000 reads/day

## Support

- [Cloudflare Documentation](https://developers.cloudflare.com/)
- [Workers Documentation](https://developers.cloudflare.com/workers/)
- [Pages Documentation](https://developers.cloudflare.com/pages/)
- [Community Forum](https://community.cloudflare.com/) 
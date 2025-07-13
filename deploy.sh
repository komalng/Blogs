#!/bin/bash

# Cloudflare Deployment Script
# This script automates the deployment of both frontend and backend

set -e

echo "🚀 Starting Cloudflare deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    print_error "Wrangler CLI is not installed. Please install it first:"
    echo "npm install -g wrangler"
    exit 1
fi

# Check if user is logged in to Cloudflare
if ! wrangler whoami &> /dev/null; then
    print_error "You are not logged in to Cloudflare. Please run:"
    echo "wrangler login"
    exit 1
fi

# Deploy Backend (Workers)
print_status "Deploying backend to Cloudflare Workers..."
cd backend

# Install dependencies
print_status "Installing backend dependencies..."
npm install

# Deploy the worker
print_status "Deploying worker..."
wrangler deploy

# Get the worker URL
WORKER_URL=$(wrangler whoami | grep -o 'https://.*\.workers\.dev' || echo "")
if [ -n "$WORKER_URL" ]; then
    print_status "Backend deployed to: $WORKER_URL"
else
    print_warning "Could not determine worker URL. Check your wrangler.toml configuration."
fi

cd ..

# Deploy Frontend (Pages)
print_status "Deploying frontend to Cloudflare Pages..."
cd frontend

# Install dependencies
print_status "Installing frontend dependencies..."
npm install

# Build the project
print_status "Building frontend..."
npm run build

# Deploy to Pages
print_status "Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name=blogs-list-frontend

cd ..

print_status "✅ Deployment completed!"
print_status "Next steps:"
echo "1. Configure environment variables in Cloudflare Pages dashboard"
echo "2. Set up custom domains if needed"
echo "3. Configure CORS settings in your worker"
echo "4. Test your application"

if [ -n "$WORKER_URL" ]; then
    echo ""
    print_status "Backend API URL: $WORKER_URL"
    print_warning "Remember to update your frontend environment variables with this URL"
fi 
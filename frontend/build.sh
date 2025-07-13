#!/bin/bash

# Frontend Build Script for Cloudflare Pages
set -e

echo "🔨 Building frontend for Cloudflare Pages..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Clean previous build
print_status "Cleaning previous build..."
rm -rf dist node_modules package-lock.json

# Install dependencies
print_status "Installing dependencies..."
npm install

# Build the project
print_status "Building project..."
npm run build

# Verify build output
if [ -d "dist" ]; then
    print_status "✅ Build completed successfully!"
    print_status "Build output directory: dist/"
    
    # List build contents
    echo ""
    print_status "Build contents:"
    ls -la dist/
    
    # Check for main entry point
    if [ -f "dist/index.html" ]; then
        print_status "✅ index.html found"
    else
        print_warning "⚠️  index.html not found in dist/"
    fi
    
    # Check for assets
    if [ -d "dist/assets" ] || [ -d "dist/js" ] || [ -d "dist/css" ]; then
        print_status "✅ Assets directory found"
    else
        print_warning "⚠️  No assets directory found"
    fi
else
    print_warning "❌ Build failed - dist directory not created"
    exit 1
fi

echo ""
print_status "Ready for deployment to Cloudflare Pages!"
print_status "Run: wrangler pages deploy dist --project-name=your-project-name" 
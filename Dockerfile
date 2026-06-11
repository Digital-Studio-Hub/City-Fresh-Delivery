# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the app (vite build + esbuild)
RUN npm run build

# Stage 2: Runtime stage  
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Set Node environment to production
ENV NODE_ENV=production

# Set Cloud Run required environment variables
ENV PORT=8080
ENV DISABLE_REUSE_PORT=true

# Copy package files
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Health check (optional but recommended)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Run the app
CMD ["node", "dist/index.cjs"]

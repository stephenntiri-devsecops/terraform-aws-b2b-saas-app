### ── Stage 1: Build React App ─────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies first (leveraging layer cache)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and run build
COPY . .
RUN npm run build

### ── Stage 2: Serve with Nginx ─────────────────────────────
FROM nginx:stable-alpine AS production

# Copy custom Nginx config (optional)
# Use nginx.conf in project root or same folder as Dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]


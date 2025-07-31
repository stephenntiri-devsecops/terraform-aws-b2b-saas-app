FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
RUN adduser -D appuser
USER appuser
EXPOSE 8080
CMD ["node", "index.js"]
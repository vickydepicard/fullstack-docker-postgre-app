# Dockerfile (dans ./backend)

FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:18-slim
WORKDIR /app
RUN apt-get update && apt-get install -y curl
COPY --from=builder /app /app

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["node", "app.js"] 

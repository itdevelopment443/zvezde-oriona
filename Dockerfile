# Use an official Node.js runtime as a base image
FROM node:22-alpine AS base

# Install dependencies globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Build the app (production mode)
FROM base AS builder
COPY --from=base /app/node_modules ./node_modules
COPY . .

# Run the Next.js production build
RUN npm run build

# Expose the port that the Next.js app will listen on
EXPOSE 3000

# Run the app in production mode
CMD ["npm", "start"]

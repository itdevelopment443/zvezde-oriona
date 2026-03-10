# deps
FROM node:22-bookworm-slim AS deps
WORKDIR /app
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# build
FROM node:22-bookworm-slim AS builder
WORKDIR /app
RUN npm i -g pnpm
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# run
FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# If you use Next "standalone", copy only that (best). Otherwise copy build + node_modules.
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
CMD ["pnpm", "start"]

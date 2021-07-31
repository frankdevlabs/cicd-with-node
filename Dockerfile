# --------------> The build image
FROM node:16-alpine AS build
WORKDIR /usr/app
COPY package*.json .babelrc /usr/app/
COPY src /usr/app/src
RUN npm install --only=dev
RUN npx babel --minified --no-comments /usr/app/src --out-dir /usr/app/dist

# --------------> The deps image
FROM node:16-alpine AS deps
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/app/.npmrc npm ci --only=production

# --------------> The production image
FROM node:16-alpine
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/app
COPY --chown=node:node --from=deps /usr/app/node_modules /usr/app/node_modules
COPY --chown=node:node package*.json /usr/app
COPY --chown=node:node --from=build /usr/app/dist /usr/app/dist

CMD ["dumb-init", "node", "dist/index.js"]

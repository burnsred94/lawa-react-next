FROM alpine:3.17 as node-base

RUN apk add nodejs npm tini

WORKDIR /app

ENTRYPOINT ["/sbin/tini", "--"]


FROM node-base as dev-deps

ENV NODE_ENV=dev

WORKDIR /app

# copy only package and generate node_modules
COPY ./package.json ./

RUN npm i --force


FROM node-base AS dev-runtime

WORKDIR /app

# copy node_modules from deps image
COPY --from=dev-deps /app/node_modules ./node_modules

# tune to be less verbose
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NEXT_TELEMETRY_DISABLED=1

# copy app sources
COPY . .

# build
RUN npm run build

# print resulting size
RUN du -shc ./*

EXPOSE 3000

# register executor
CMD ["npm", "run", "start"]

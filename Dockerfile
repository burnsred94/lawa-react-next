FROM alpine:3.17 as node-base

RUN apk add nodejs npm tini

WORKDIR /src

ENTRYPOINT ["/sbin/tini", "--"]


FROM node-base as dev-deps

ENV NODE_ENV=dev

WORKDIR /src

COPY ./package.json ./

RUN npm i


FROM node-base AS dev-runtime

WORKDIR /src

# copy node_modules from deps image
COPY . .

# tune to be less verbose
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NEXT_TELEMETRY_DISABLED=1

# copy app sources
COPY . .

# build
RUN npm run dev

# print resulting size
RUN du -shc ./*

EXPOSE 3000

# register executor
CMD ["npm", "run", "start"]


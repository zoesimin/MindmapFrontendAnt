### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:10 as builder

COPY package.json package-lock.json ./

# RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
## 下载依赖包，将 node_modules 文件夹下的所有文件复制到新的文件夹my-app内
RUN npm i && mkdir /my-app && cp -R ./node_modules ./my-app

WORKDIR /my-app

# copy 源文件 目的路径
COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm install caniuse-lite browserslist && $(npm bin)/ng build --prod


### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /my-app/dist/Mindmap-Frontend-Ant /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

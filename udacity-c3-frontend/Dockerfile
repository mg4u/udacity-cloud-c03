# FROM node:12
# 
# # Create app directory
# WORKDIR /usr/src/app
# 
# # Install app dependencies
# # A wildcard is used to ensure both package.json and package-lock.json are copied
# # where available
# # COPY package*.json ./
# 
# COPY . .
# 
# RUN npm install 
# 
# # Bundle app source
# EXPOSE 8100
# CMD [ "npm", "run", "dev" ]
# 

## Build
FROM beevelop/ionic AS ionic
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
RUN ionic build

## Run 
FROM nginx:alpine
#COPY www /usr/share/nginx/html
COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html
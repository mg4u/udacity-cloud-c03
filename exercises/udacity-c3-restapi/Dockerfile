FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
# where available
# COPY package*.json ./

COPY . .

RUN npm install 

# Bundle app source
EXPOSE 8080
CMD [ "npm", "run", "dev" ]


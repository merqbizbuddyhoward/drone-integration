FROM node:8.11.2-alpine

# Create app directory
WORKDIR /var/app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm build

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]

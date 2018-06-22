FROM node:8.11.2-alpine

# Create app directory
WORKDIR /var/app

# Install app dependencies
COPY package*.json ./

#RUN npm install

COPY . .

EXPOSE 8000

RUN chmod +x build.sh

ENTRYPOINT ["/var/app/build.sh"]
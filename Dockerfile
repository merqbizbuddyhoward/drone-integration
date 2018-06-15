FROM node:8.11.2

# Base packages
RUN apt-get update && \
	apt-get install -y git sudo software-properties-common python-software-properties

RUN wget https://dl-ssl.google.com/linux/linux_signing_key.pub && sudo apt-key add linux_signing_key.pub
RUN sudo add-apt-repository "deb http://dl.google.com/linux/chrome/deb/ stable main"

RUN	apt-get -y update && \
	apt-get -y install google-chrome-stable

RUN apt-get install -y firefox-esr
RUN npm install --global gatsby --no-optional gatsby@1.9 

EXPOSE 8000

# Create app directory
WORKDIR /var/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x entry.sh
ENTRYPOINT ["/var/app/entry.sh"]
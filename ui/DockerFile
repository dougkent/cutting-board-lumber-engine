FROM node:10

# Create app directory
WORKDIR /ui-app

#Install app dependencies
COPY package*.json /ui-app/

RUN npm i

#Bundle app source
COPY . /ui-app/

EXPOSE 3000
CMD ["npm", "start"]

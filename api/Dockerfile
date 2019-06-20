FROM node:12.4.0-alpine

# Create app directory
WORKDIR /api-app

#Install App dependencies
COPY package*.json /api-app/

RUN npm i --silent

#Bundle app source
COPY . /api-app/

EXPOSE 4000
CMD ["npm", "start"]

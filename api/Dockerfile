FROM node:10

# Create app directory
WORKDIR /api-app

#Install App dependencies
COPY package*.json /api-app/

RUN npm i

#Bundle app source
COPY . /api-app/

EXPOSE 4000
CMD ["npm", "start"]

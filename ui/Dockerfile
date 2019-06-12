FROM node:10

# Create app directory
WORKDIR /ui-app

#Install app dependencies
COPY package*.json /ui-app/

RUN npm i

#Bundle app source
COPY . /ui-app/

RUN npm run build

EXPOSE 3000

RUN serve -s build -l 3000
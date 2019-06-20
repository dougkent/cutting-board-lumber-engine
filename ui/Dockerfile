FROM node:12.4.0-alpine as build

WORKDIR /ui-app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /ui-app/

RUN npm i --silent

COPY . /ui-app/

RUN npm run build

FROM nginx:1.16.0-alpine

COPY --from=build /ui-app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
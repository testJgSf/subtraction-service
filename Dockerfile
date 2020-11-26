FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install --only=prod

EXPOSE 3003

CMD [ "npm", "start" ]

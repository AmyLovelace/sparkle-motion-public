FROM node:18.16.0-alpine

RUN npm install -g typescript

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . ./

EXPOSE 5173

CMD ["npm", "run", "dev"]
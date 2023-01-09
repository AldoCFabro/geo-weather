FROM node:18.12.1
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app

RUN npm install -g ts-node

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]
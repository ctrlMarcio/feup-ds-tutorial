FROM node:17

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
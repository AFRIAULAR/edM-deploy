FROM node:14

WORKDIR /src/app

COPY package.json package-lock.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]

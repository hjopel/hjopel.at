FROM node:22.2.0-alpine

WORKDIR /app

copy package-*.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "start"]
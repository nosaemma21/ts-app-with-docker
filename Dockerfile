FROM node:20-alpine

WORKDIR /practice

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/app.js"]
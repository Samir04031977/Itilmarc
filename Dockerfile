
FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY server.js .
COPY site site

EXPOSE 8080

CMD ["node", "server.js"]
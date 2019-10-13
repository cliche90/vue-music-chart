FROM node:10
WORKDIR /webserver
ADD . /webserver
COPY ./scripts/schema /crawler/schema
RUN npm install
CMD ["node", "server.js"]
FROM node:latest

WORKDIR /data

COPY . .

RUN npm install -g json-server

RUN mkdir public

COPY dist/apps/portal public

EXPOSE 80

CMD ["json-server", "--watch", "/data/apps/portal/db.json", "--routes", "/data/routes.json"]

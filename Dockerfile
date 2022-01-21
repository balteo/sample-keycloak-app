FROM node:latest

WORKDIR /data

COPY . .

RUN npm install -g json-server
RUN npm install -f
RUN npm run build:portal-frontend
RUN mkdir public
RUN mv /data/dist/apps/portal/* /data/public

EXPOSE 80

CMD ["json-server", "--watch", "/data/apps/portal/db.json", "--routes", "/data/routes.json"]

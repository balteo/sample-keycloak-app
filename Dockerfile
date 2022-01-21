FROM node:latest

WORKDIR /data

RUN yarn global add json-server

COPY package.json .
RUN yarn install --ignore-scripts

COPY . .
RUN yarn run build:portal-frontend

RUN mkdir public
RUN mv /data/dist/apps/portal/* /data/public

EXPOSE 80

CMD ["json-server", "--watch", "/data/apps/portal/db.json", "--routes", "/data/routes.json"]

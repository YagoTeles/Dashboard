
#Realizar o build da aplicaçao
FROM node:lts-alpine3.20 as build

WORKDIR /app/dashboard

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build


# Hostear o servidor"
FROM node:lts-alpine3.20

RUN npm i -g serve

WORKDIR /srv/dashboard
COPY --from=build /app/dashboard/build .

ENTRYPOINT ["serve", "-s", ".", "-l", "3000"]
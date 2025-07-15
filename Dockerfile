FROM node:current-alpine3.22 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY package*.json ./

CMD ["npm", "start"]

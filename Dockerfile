FROM node:18-slim

ARG MONGODB_USER \
    MONGODB_PASSWORD

ENV MONGODB_USER=${MONGODB_USER} \
    MONGODB_PASSWORD=${MONGODB_PASSWORD}

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm i

RUN touch .env

RUN echo "MONGODB_URL=mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.zodlz.mongodb.net/folio-db?retryWrites=true&w=majority" > .env

EXPOSE 5000

CMD ["npm","start"]
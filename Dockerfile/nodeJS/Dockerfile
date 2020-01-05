FROM node:lts-alpine

ENV PORT 3000

WORKDIR /home/node/app
RUN chown -R node:node /home/node/app
USER node

RUN yarn install
COPY . .

CMD ["yarn", "start"]
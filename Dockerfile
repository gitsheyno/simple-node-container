FROM node:20-alpine
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY  --chown=node:node package*.json ./
RUN npm ci
COPY . .

COPY --chown=node:node . .

CMD ["node", "src/index.js"]


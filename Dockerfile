FROM node:18.17.0
RUN npm install -g yarn
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
#RUN yarn build
EXPOSE 3000
CMD ["yarn dev"]
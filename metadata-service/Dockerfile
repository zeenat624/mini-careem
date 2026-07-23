FROM node:18

WORKDIR /app

# copy package.json first
COPY package.json .

# install dependencies
RUN npm install

# copy rest of code
COPY . .

# run app
CMD ["node", "app.js"]

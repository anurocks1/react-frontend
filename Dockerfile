FROM node:22.6.0-alpine3.19
WORKDIR /app/react-app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]

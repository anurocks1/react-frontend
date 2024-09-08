FROM node:22.6.0-alpine3.19
WORKDIR /app/react-app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]

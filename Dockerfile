# FROM node:22.6.0-alpine3.19
# WORKDIR /app/react-app
# COPY package.json ./
# RUN npm install
# COPY . .
# EXPOSE 5173
# CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---- Base Stage ----
FROM node:22.6.0-alpine3.19 AS base
WORKDIR /app/react-app
COPY package.json ./
RUN npm install

# ---- Build Stage ----
FROM base AS build
COPY . . 
RUN npm run build

# ---- Runtime Stage ----
FROM node:22.6.0-alpine3.19 AS production
WORKDIR /app/react-app
COPY --from=build /app/react-app/dist ./dist
COPY package.json ./
RUN npm install
EXPOSE 4173
CMD [ "npm", "run", "preview", "--", "--host", "0.0.0.0" ]
    


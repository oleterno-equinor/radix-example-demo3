FROM node:16-alpine
WORKDIR /app

COPY ./my-app/package*.json ./
RUN npm install
COPY ./my-app .
RUN npm run build
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 3000

USER 65534
CMD ["npm", "start"]

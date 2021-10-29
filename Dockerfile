FROM node:16-alpine

WORKDIR /app

COPY ./my-app .
# Make a clean npm install and only install modules
# needed for production
RUN npm ci --only=production

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 3000

USER 65534

CMD ["npm", "run", "start"]

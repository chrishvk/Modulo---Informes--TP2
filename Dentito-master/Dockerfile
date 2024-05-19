FROM node:lts-alpine

WORKDIR /app

# COPY frontend/package*.json ./
COPY package*.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

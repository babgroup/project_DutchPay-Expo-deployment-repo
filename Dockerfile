FROM node:20-buster

RUN npm install -g @expo/ngrok@^4.1.0

ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
ENV EXPO_USE_DEV_SERVER=true

WORKDIR /app
COPY . /app

RUN npm install

CMD ["npx", "expo", "start", "--tunnel"]

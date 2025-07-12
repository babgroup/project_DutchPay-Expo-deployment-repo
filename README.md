1. docker compose up -d --build
2. 컨테이너에 접속 후 npx expo login
3. 컨테이너에서 나온 후 docker compose down
4. docker compose up -d
5. 도커 데스크톱의 logs 탭에서 Metro waiting on ~~ 부분을 확인 후 expo go로 접속하거나 브라우저로 접속
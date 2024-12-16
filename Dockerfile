# Step 1: Node.js 베이스 이미지
FROM node:16-alpine

# Step 2: 작업 디렉토리 설정
WORKDIR /usr/src/app

# Step 3: 필요한 파일 복사
COPY package*.json ./
RUN npm install

# Step 4: 소스 코드 복사
COPY . .
RUN npm run build

# Step 5: 컨테이너에서 노출할 포트 설정
EXPOSE 3000

# Step 6: 서버 실행 명령어
CMD ["node", "dist/index.js"]
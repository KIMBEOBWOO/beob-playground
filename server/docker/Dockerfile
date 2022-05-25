#########################################################
# Developement
#########################################################
FROM node:14.18.3-alpine as developement
RUN mkdir -p /app/main
WORKDIR /app/main

# docker cp [host File Path] [container name]:[conatiner File Path]
# host(local, git repo)의 package.json -> docker container 의 명령어 실행 기준 WORKDIR 에 복사
COPY package*.json yarn.lock ./
RUN npm install yarn
RUN npm install -g @nestjs/cli
RUN yarn

COPY . .
RUN yarn build
CMD [ "yarn", "start:dev", "--preserveWatchOutput" ]

#!/bin/sh
echo "Start redis docker containers ..."
PROJECT_PATH=/home/ec2-user/server
cd ${PROJECT_PATH}

docker-compose down
docker-compose up --build -d redis

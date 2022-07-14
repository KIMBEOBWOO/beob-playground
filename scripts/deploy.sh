#!/bin/sh
echo "Start docker containers ..."
PROJECT_PATH=/home/ec2-user/server
cd ${PROJECT_PATH}
sudo ls

docker-compose down
docker-compose up -d --build

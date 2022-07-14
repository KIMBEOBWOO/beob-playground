#!/bin/sh
echo "Start docker containers ..."
sudo ls

docker-compose down
docker-compose up -d --build

#!/bin/sh

echo "Start docker containers ..."
# cd /home/ec2-user/server
docker-compose up -d --build

#!/bin/sh

echo "Start docker containers ..."
cd /home/ec2-user/beob-playground
docker-compose up -d --build

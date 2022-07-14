#!/bin/sh
echo "Start docker containers ..."
docker-compose down
docker-compose up -d --build

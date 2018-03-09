#!/bin/bash

docker kill idb
docker rm idb
docker build -t idb .
docker run -p 80:80 -t idb
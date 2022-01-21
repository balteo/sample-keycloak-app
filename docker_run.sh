#!/bin/bash

docker run --name json-server -v $PWD/apps/portal/db.json:/db.json --rm -d -p 80:80 custom-json-server:latest

#!/bin/bash
SCHEMA_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && cd ../../crawler/schema ; pwd -P )
WEBSERVER_ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && cd ../ ; pwd -P )

cp -r $SCHEMA_DIR $(dirname "${BASH_SOURCE[0]}")

cd $WEBSERVER_ROOT_DIR
docker build -t web-music-player .
rm -rf $(cd $(dirname "${BASH_SOURCE[0]}") && cd ./schema ; pwd -P )


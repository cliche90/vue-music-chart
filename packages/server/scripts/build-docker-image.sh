#!/bin/bash
SCHEMA_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && cd ../../crawler/schema ; pwd -P )
FRONTEND_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && cd ../../frontend/dist ; pwd -P )
WEBSERVER_ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && cd ../ ; pwd -P )

rm -rf "$WEBSERVER_ROOT_DIR/schema"
cp -r $SCHEMA_DIR $WEBSERVER_ROOT_DIR

rm -rf "$WEBSERVER_ROOT_DIR/dist"
cp -r $FRONTEND_DIR $WEBSERVER_ROOT_DIR

cd $WEBSERVER_ROOT_DIR
docker build -t web-music-player .

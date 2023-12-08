#!/bin/bash

HTML_SRC_DIR=public
HTML_SRC_DIR2=../blog/public
TARGET_DIR=docs

if [ -d ${HTML_SRC_DIR} ]; then
    echo "Copy ${HTML_SRC_DIR} to ${TARGET_DIR}"
    rm -rf ${TARGET_DIR}
    cp -r ${HTML_SRC_DIR} ${TARGET_DIR}
elif [ -d ${HTML_SRC_DIR2} ]; then
    echo "Copy ${HTML_SRC_DIR2} to ${TARGET_DIR}"
    rm -rf ${TARGET_DIR}
    cp -r ${HTML_SRC_DIR2} ${TARGET_DIR}
fi

git status

echo "Done!"

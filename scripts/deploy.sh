#!/bin/bash

cd  /home/ubuntu/DGIT_V2_Client

ls

git pull
yarn build
pm2 start yarn -w -i 0 --name "DGIT-V2" -- start
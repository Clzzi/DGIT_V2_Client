#!/bin/bash
git pull
yarn build
pm2 delete all
pm2 start yarn -w -i 0 --name "DGIT-V2" -- start
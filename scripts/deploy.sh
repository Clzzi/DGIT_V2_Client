#!/bin/bash
PATH="/home/ubuntu/.local/bin:$PATH"

cd  /home/ubuntu/build

pm2 delete all
pm2 start yarn -w -i 0 --name "DGIT-V2" -- start
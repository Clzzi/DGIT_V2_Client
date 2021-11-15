#!/bin/bash
npm install pm2 -g
/usr/local/bin/pm2 delete all
/usr/local/bin/pm2 start yarn -w -i 0 --name "DGIT-V2" -- start
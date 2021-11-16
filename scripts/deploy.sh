#!/bin/bash
npm install -g pm2
pm2 delete all
pm2 start yarn -w -i 0 --name "DGIT-V2" -- start
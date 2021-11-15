#!/bin/bash
npm install pm2 -g
pm2 stop admin || true 
pm2 delete admin || true 
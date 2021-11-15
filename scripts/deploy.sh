#!/bin/bash
source /home/ubuntu/
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export HOME="/home/ubuntu/"
npm install -g pm2
pm2 delete all
pm2 start yarn -w -i 0 --name "DGIT-V2" -- start
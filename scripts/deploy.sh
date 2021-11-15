curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install 14.18.0
nvm use 14.18.0
npm i -g yarn
npm i -g pm2
yarn
yarn build
pm2 delete all
pm2 start yarn -w -i 0 --name "DGIT-V2" -- start
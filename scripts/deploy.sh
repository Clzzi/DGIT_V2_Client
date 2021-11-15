cd
cd DGIT_V2_Client

pm2 delete all
pm2 start yarn -w -i 0 --name "DGIT-V2" -- start
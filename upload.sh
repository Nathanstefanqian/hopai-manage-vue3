pnpm build:pro
git add -A
git commit -m '推送部署'
git push
ssh my-server
cd /hopai/HOPAI_Manage
git pull
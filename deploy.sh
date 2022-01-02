echo "[DEPLOY.SH] Pulling all new changes"
git pull
echo "[DEPLOY.SH] DONE"

echo "[DEPLOY.SH] Building new image"
export IMAGE_TAG=$(date +"%Y_%m_%d-%H_%M")-$(git rev-parse --short HEAD)
docker build -t node_typescript_api_starter:$IMAGE_TAG .
echo "[DEPLOY.SH] DONE"

echo "[DEPLOY.SH] Deleting old container & running new one"
docker rm -f api_starter
docker run --detach --restart=always --env-file .env -p 8000:8000 --name api_starter node_typescript_api_starter:$IMAGE_TAG
echo "[DEPLOY.SH] DONE"

echo " "
echo "[DEPLOY.SH] DEPLOYMENT HAS BEEN SUCCESSFULLY DONE"

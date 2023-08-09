echo "Switching to branch deploy"
git checkout deploy
echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* eamon@172.105.99.42:/var/www/172.105.99.42/

echo "Done!"

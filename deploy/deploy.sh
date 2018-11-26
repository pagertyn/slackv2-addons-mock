echo 'Building'
npm run build

echo 'Copying build to s3'
aws s3 cp build/ $DEPLOY_TO --recursive --acl public-read --cache-control 'max-age=0, no-cache'

echo 'Activating deployed version'
echo $COMMIT_SHA >> sha.txt && aws s3 cp sha.txt $DEPLOY_VERSION_FILE_TO --acl public-read

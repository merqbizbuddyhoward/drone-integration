#!/bin/sh
set -e

if [ "$BRANCH_ENV" = "develop" ]
then
    NODE_ENV="development"
elif [ "$BRANCH_ENV" = "qa" ]
then
    NODE_ENV="stage"
elif [ "$BRANCH_ENV" = "preview" ]
then
    NODE_ENV="preview"
elif [ "$BRANCH_ENV" = "demo" ]
then
    NODE_ENV="demo"
elif [ "$BRANCH_ENV" = "master" ]
then
    NODE_ENV="production"
else
    NODE_ENV="develop"
fi
echo "Building for environment" $NODE_ENV

npm run build


#!/usr/bin/env bash

source ./ci/utils/setup-shell.sh
source ./ci/utils/setup-yarn.sh

environment=$1;
project=$2;

if [ "$BITBUCKET_BRANCH" = "master" ]; then
    tag="latest"
else
    tag=$BITBUCKET_BRANCH
fi

# error and show output if lsd fails
set +o errexit
baseurl=$(lsd url --environment $environment --project $project --tag $tag)
if [[ $? -ne  0 ]]; then
  echo $baseurl
  exit 1
fi
set -o errexit

# set env vars used by CRAP to build the app
export NODE_ENV=production
export PUBLIC_URL=$baseurl
export REACT_APP_ROUTE_PATH=/

# tell nextjs to build the app
yarn run build

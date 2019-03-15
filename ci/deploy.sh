#!/usr/bin/env bash

source ./ci/utils/setup-shell.sh

environment=$1;
project=$2;

if [ "$BITBUCKET_BRANCH" = "master" ]; then
    tag="latest"
else
    tag=$BITBUCKET_BRANCH
fi

lsd deploy --environment $environment --project $project --tag $tag --directory ./build

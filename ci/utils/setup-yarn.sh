#!/usr/bin/env bash

# add yarn binaries to the path
export PATH="$PATH:$(yarn bin)"

# setup .npmrc in the root directory so we can use NPM_TOKEN from env var to install all the dependencies
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

# install all the dependencies
yarn

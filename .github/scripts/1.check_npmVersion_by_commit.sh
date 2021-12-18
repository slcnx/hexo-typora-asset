#!/bin/bash
gitHeadCommitMessge="$1"
isPublishMajor=$( echo "${gitHeadCommitMessge}" | grep "publish major")
isPublishMinor=$( echo "${gitHeadCommitMessge}" | grep "publish minor")
echo "$isPublishMajor $isPublishMinor"

if [ -n "$isPublishMajor" ]; then
  npm version major
elif [ -n "$isPublishMinor" ]; then
  npm version minor
else 
  npm version patch
fi

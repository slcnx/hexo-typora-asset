#!/bin/bash

isPublishMajor=$( echo "${{github.event.head_commit.message }}" | grep "publish major")
isPublishMinor=$( echo "${{github.event.head_commit.message }}" | grep "publish minor")
echo "$isPublishMajor $isPublishMinor"
if [ -n "$isPublishMajor" ]; then
  npm version major
elif [ -n "$isPublishMinor" ]; then
  npm version minor
else 
  npm version patch
fi

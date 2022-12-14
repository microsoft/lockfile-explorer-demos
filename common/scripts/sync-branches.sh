#!/bin/bash

# exit when any command fails
set -e

function sync-demo {
    set -e

    echo !!! git checkout -f -B $1 remotes/origin/$1
    git checkout -f -B $1 remotes/origin/$1

    echo git merge-base --is-ancestor remotes/origin/demo/_base $1
    if git merge-base --is-ancestor remotes/origin/demo/_base $1
    then
        echo !!! The $1 branch is already up to date.
    else
        echo !!! git merge remotes/origin/demo/_base
        git merge remotes/origin/demo/_base

        echo !!! git push
        git push
    fi
    echo
}

if [ "$1" != "--dangerous" ]
then
  echo
  echo 'This script merges the "demo/_base" branch into each of the "demo/*" branches'
  echo
  echo 'WARNING: THIS SCRIPT WILL OVERWRITE YOUR LOCAL GIT BRANCHES'
  echo 'AND PUSH COMMITS DIRECTLY TO GITHUB!  USE AT YOUR OWN RISK!'
  echo
  echo 'If you really want to proceed, invoke it with the "--dangerous" CLI parameter.'

  exit 1
fi

echo !!! git fetch
git fetch

echo

sync-demo demo/doppel-1
sync-demo demo/doppel-2
sync-demo demo/doppel-3
sync-demo demo/peer-1
sync-demo demo/peer-2
sync-demo demo/peer-3
sync-demo demo/peer-4
sync-demo demo/peer-5
sync-demo demo/sample-1
sync-demo demo/sbs-1
sync-demo demo/sbs-2
sync-demo demo/sbs-3

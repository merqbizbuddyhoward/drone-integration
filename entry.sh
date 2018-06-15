#!/bin/sh
set -e

if  [ "$1" = "develop" ]
then
  gatsby develop --host 0.0.0.0 -p 8000

elif  [ "$1" = "build" ]
then
  npm run build

elif  [ "$1" = "test" ]
then
  npm run test

elif  [ "$1" = "lint" ]
then
  npm run lint

elif  [ "$1" = "approve" ]
then
  npm run approve

else
  exec $@

fi
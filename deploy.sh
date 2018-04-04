#!/bin/bash

export PORT=5100
export MIX_ENV=prod
export GIT_PATH=/home/tasktracker8/src/tasktracker8 

PWD=`pwd`
if [ $PWD != $GIT_PATH ]; then
	echo "Error: Must check out git repo to $GIT_PATH"
	echo "  Current directory is $PWD"
	exit 1
fi

if [ $USER != "tasktracker8" ]; then
	echo "Error: must run as user 'tasktracker8'"
	echo "  Current user is $USER"
	exit 2
fi

mix deps.get
(cd assets && npm install)
(cd assets && ./node_modules/brunch/bin/brunch b -p)
mix phx.digest
mix release --env=prod

mkdir -p ~/www
mkdir -p ~/old

NOW=`date +%s`
if [ -d ~/www/tasktracker8 ]; then
	echo mv ~/www/tasktracker8 ~/old/$NOW
	mv ~/www/tasktracker8 ~/old/$NOW
fi

mkdir -p ~/www/tasktracker8
REL_TAR=~/src/tasktracker8/_build/prod/rel/tasktracker8/releases/0.0.1/tasktracker8.tar.gz
(cd ~/www/tasktracker8 && tar xzvf $REL_TAR)

crontab - <<CRONTAB
@reboot bash /home/tasktracker8/src/tasktracker8/start.sh
CRONTAB

#. start.sh


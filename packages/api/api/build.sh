#!/bin/bash

set -e

sudo virtualenv --without-pip virtualenv
sudo pip install -r requirements.txt --target virtualenv/lib/python3.9/site-packages
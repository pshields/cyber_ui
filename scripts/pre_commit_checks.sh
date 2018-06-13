#!/bin/bash -ex
# This script builds the Cyber UI library and demo app and runs their tests
# Check that this script runs successfully before committing to the master branch
ng build cyber_ui
ng build demo
ng test cyber_ui --watch=false
ng test demo --watch=false

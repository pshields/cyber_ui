#!/bin/bash -e
#
# This script is used to release new versions of cyber_ui.
#
# The release process documentation also currently lives here, in the comments.
#


# Run the pre-commit checks to make sure all tests pass and the project builds
./pre_commit_checks.sh


# TODO Log the previous version number stored in lib/package.json


# TODO Calculate the version number for the new release
# In the default case, this is an increment to the patch number


# TODO Get confirmation via the command line that the proposed release version number is correct


# TODO Update lib/package.json with the new version


# Rebuild the project with the new version number
ng build cyber_ui


# TODO Run the npm or yarn publish command here with appropriate flags


# TODO Run the commands to commit the source changes (updated release number)


# TODO Run the commands to push the release commit to GitHub


# TODO Run the commands or print the documentation necessary to update the releases list on GitHub


# Deploy an updated version of the demo site
./deploy_demo.sh


# TODO Print a success message, or any applicable errors

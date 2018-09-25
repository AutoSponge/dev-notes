```sh
# Undo any modifications made to the working tree by the build process

git reset --hard

# Remove any untracked build artifacts created by the build process

git clean -fdx

# Fetch all commits and new branches/tags from the git server and remove deleted branches.

git fetch --all --prune

# Set the index and working directory to the required tag or branch.
# Notes:
# * If the last build was for the same branch, then this will not
#   update the working directory.
# * The %TAG_OR_BRANCH% variable is passed in via the GUI.  This will
#   be in the form of a branch name (develop|release/vX.X.X) or a tag (vX.X.X)

git checkout %TAG_OR_BRANCH%

# Bring the index and working tree up-to-date.
# Notes:
# * the --ff-only flag is probably redundant, but we want to make it
#   clear that no merging is expected.

git pull --ff-only
```

```
alias.continue=!git add . && git commit --amend --no-edit && git push --force-with-lease
alias.dev=!git fetch origin && git rebase -p origin/develop
```

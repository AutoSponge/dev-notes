## Free up HD space:

- Mac: `find . -name "node_modules" -exec rm -rf '{}' +`
- Windows: `FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" rm -rf "%d"`

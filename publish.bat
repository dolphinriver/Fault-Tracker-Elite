@echo off
echo Building...
call npm run docs:build
if errorlevel 1 (
  echo Build failed, stopped.
  pause
  exit /b 1
)
echo Switching to gh-pages...
git checkout gh-pages 2>nul || git checkout -b gh-pages

echo Cleaning old files...
git rm -rf * --exclude=.git --exclude=.github

echo Copying new files...
xcopy /e /y .vitepress\dist\* . >nul

echo Committing...
git add .
git commit -m "publish: %date% %time%" 2>nul

echo Pushing...
git push origin gh-pages

echo Returning to main...
git checkout main
echo Done! Press any key to exit...
pause >nul
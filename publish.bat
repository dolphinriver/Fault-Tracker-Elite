@echo off
echo 正在构建...
call npm run docs:build
if errorlevel 1 (
  echo 构建失败，已停止
  pause
  exit /b 1
)
echo 正在切换到 gh-pages...
git checkout gh-pages 2>nul || git checkout -b gh-pages

echo 正在清理旧文件...
git rm -rf * --exclude=.git --exclude=.github

echo 正在复制新文件...
xcopy /e /y .vitepress\dist\* . >nul

echo 正在提交...
git add .
git commit -m "publish: %date% %time%" 2>nul

echo 正在推送...
git push origin gh-pages

echo 返回 main 分支...
git checkout main
echo 上线完成！按任意键退出...
pause >nul
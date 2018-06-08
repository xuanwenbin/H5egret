@echo off

rem 差异化编译，并上传文件到123服务器
rem sftp密码需要自己填，但不要提交

set BASE_DIR=%~dp0
set TOOLS_DIR="tools"

set LOCAL_DIR="%BASE_DIR%\..\warships\bin-release\web\1"
set PROJ_DIR="%BASE_DIR%\.."

rem 拉取更新，使用前要确定使用的分支
rem cd %PROJ_DIR%
rem git pull origin master
rem cd %BASE_DIR%

rem sftp配置
set REMOTE_DIR="root@123.207.66.245:/usr/share/nginx/html/shipDMM-client-test"
set REMOTE_PASSWORD=""

echo 获取 default.res.json 和 others.res.json
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %REMOTE_DIR%/resource/default.res.json %BASE_DIR%\default.res.json
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %REMOTE_DIR%/resource/others.res.json %BASE_DIR%\others.res.json

rem 编译
node out/mainMergers.js

rem 压缩
node out/minifier.js

rem 上传
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\libs %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\promise %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\resource %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\favicon.ico %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\main.min.js %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\manifest.json %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\index.html %REMOTE_DIR%

echo 完成
pause

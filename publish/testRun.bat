@echo off

rem ���컯���룬���ϴ��ļ���123������
rem sftp������Ҫ�Լ������Ҫ�ύ

set BASE_DIR=%~dp0
set TOOLS_DIR="tools"

set LOCAL_DIR="%BASE_DIR%\..\warships\bin-release\web\1"
set PROJ_DIR="%BASE_DIR%\.."

rem ��ȡ���£�ʹ��ǰҪȷ��ʹ�õķ�֧
rem cd %PROJ_DIR%
rem git pull origin master
rem cd %BASE_DIR%

rem sftp����
set REMOTE_DIR="root@123.207.66.245:/usr/share/nginx/html/shipDMM-client-test"
set REMOTE_PASSWORD=""

echo ��ȡ default.res.json �� others.res.json
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %REMOTE_DIR%/resource/default.res.json %BASE_DIR%\default.res.json
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %REMOTE_DIR%/resource/others.res.json %BASE_DIR%\others.res.json

rem ����
node out/mainMergers.js

rem ѹ��
node out/minifier.js

rem �ϴ�
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\libs %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\promise %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\resource %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\favicon.ico %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\main.min.js %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\manifest.json %REMOTE_DIR%
%TOOLS_DIR%\pscp.exe -r -scp -pw %REMOTE_PASSWORD% %LOCAL_DIR%\index.html %REMOTE_DIR%

echo ���
pause

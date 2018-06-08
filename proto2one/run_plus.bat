@echo off
"C:\Program Files\2345Soft\HaoZip\HaoZipC.exe" x jsproto.tar
xcopy .\JsProto\. .\proto\. /S /Y
rd JsProto /s /q

node out/index.js
pause
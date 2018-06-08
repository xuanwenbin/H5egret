@echo off
if exist txt rd txt /s /q
svn export https://192.168.0.126/svn/OnmyojiH5/OnmyojiH5Config/configs ./txt --force

node out/main.js txt/configlist.xlsx txt
pause
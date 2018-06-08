#!/bin/sh

# 差异化编译，并上传文件到123服务器
# sftp密码需要自己填，但不要提交

BASE_DIR=$(cd `dirname $0`; pwd)
TOOLS_DIR="./tools"

LOCAL_DIR="$BASE_DIR/../warships/bin-release/web/1"
PROJ_DIR="$BASE_DIR/.."

# sftp配置
REMOTE_DIR="root@111.230.226.186:/data/openresty/client"
REMOTE_PASSWORD="hqfy123456"

# 拉取更新，使用前要确定要用的分支
#cd $PROJ_DIR
#git pull origin master
#cd $BASE_DIR

echo 获取 default.res.json 和 others.res.json
if [ `uname | grep MINGW` ]; then
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $REMOTE_DIR/resource/default.res.json $BASE_DIR/default.res.json
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $REMOTE_DIR/resource/others.res.json $BASE_DIR/others.res.json
else
    expect ./download_162.exp
fi

# 编译
node out/mainMergers.js

# 压缩
node out/minifier.js

# 上传
if [ `uname | grep MINGW` ]; then
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/libs $REMOTE_DIR
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/promise $REMOTE_DIR
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/resource $REMOTE_DIR
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/favicon.ico $REMOTE_DIR
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/main.min.js $REMOTE_DIR
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/manifest.json $REMOTE_DIR
    $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/index.html $REMOTE_DIR
else
    expect ./upload_162.exp
fi

echo 完成
read

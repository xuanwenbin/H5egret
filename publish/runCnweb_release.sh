#!/bin/sh

# 差异化编译，并上传文件到123服务器
# sftp密码需要自己填，但不要提交

BASE_DIR=$(cd `dirname $0`; pwd)
TOOLS_DIR="./tools"

LOCAL_DIR="$BASE_DIR/../warships/bin-release/web/1"
PROJ_DIR="$BASE_DIR/.."

# sftp配置
REMOTE_DIR="/e/works/bucket/warshiph5_cnweb"
REMOTE_PASSWORD=""

# 拉取更新，使用前要确定要用的分支
#cd $PROJ_DIR
#git pull origin master
#cd $BASE_DIR

echo 获取 default.res.json 和 others.res.json
# if [ `uname | grep MINGW` ]; then
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $REMOTE_DIR/resource/default.res.json $BASE_DIR/default.res.json
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $REMOTE_DIR/resource/others.res.json $BASE_DIR/others.res.json
# else
#     expect ./download.exp
# fi
cp $REMOTE_DIR/resource/default.res.json $BASE_DIR/default.res.json
cp $REMOTE_DIR/resource/others.res.json $BASE_DIR/others.res.json

# 编译
node out/mainMergers_release.js

# 压缩
node out/minifier.js

# 上传
# if [ `uname | grep MINGW` ]; then
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/libs $REMOTE_DIR
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/promise $REMOTE_DIR
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/resource $REMOTE_DIR
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/favicon.ico $REMOTE_DIR
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/main.min.js $REMOTE_DIR
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/manifest.json $REMOTE_DIR
#     $TOOLS_DIR/pscp.exe -r -scp -pw $REMOTE_PASSWORD $LOCAL_DIR/index.html $REMOTE_DIR
# else
#     expect ./upload.exp
# fi
cp -R $LOCAL_DIR/libs $REMOTE_DIR
cp -R $LOCAL_DIR/promise $REMOTE_DIR
cp -R $LOCAL_DIR/resource $REMOTE_DIR
cp -R $LOCAL_DIR/favicon.ico $REMOTE_DIR
cp -R $LOCAL_DIR/main.min.js $REMOTE_DIR
cp -R $LOCAL_DIR/manifest.json $REMOTE_DIR
cp -R $LOCAL_DIR/index.html $REMOTE_DIR

echo 完成
read

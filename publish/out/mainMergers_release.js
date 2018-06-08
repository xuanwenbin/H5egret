"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var crc = require("crc");
var lineReader = require("line-reader");
var child_process = require("child_process");
var publishPath = "../warships/bin-release/web/1/";
var resourcePath = publishPath + "resource/";
var defaultName = "default.res.json";
var configName = "config.res.json";
var ohterName = "others.res.json";
var indexName = publishPath + "index.html";

var crcList = {}; //这里记录crc值
function getDefaultCrc(obj, crcList) {
    var len = obj.resources.length;
    for (var i = 0; i < len; i++) {

        let url = resourcePath + obj.resources[i].url.split("?")[0];
        crcList[url] = obj.resources[i].url.split("?")[1];
    }
}
function getOthersCrc(obj, crcList) {

    for(let key in obj){
        crcList[key] = obj[key];
    }
}

var vList = {}; //这里被记录过的文件
function getV(obj, vList) {
    var len = obj.resources.length;
    for (var i = 0; i < len; i++) {
        obj.resources[i].url = obj.resources[i].url.split("?")[0];
        vList[resourcePath + obj.resources[i].url] = 1;

        var v = "";
        if(obj.resources[i].url && fs.existsSync(resourcePath + obj.resources[i].url))
            v = crc.crc32(fs.readFileSync(resourcePath + obj.resources[i].url)).toString(16);

        if(crcList[resourcePath + obj.resources[i].url] == ("v=" + v))
            crcList[resourcePath + obj.resources[i].url] = 1;
        else
            console.log("defaultJson修改过的文件..." + obj.resources[i].url);

        obj.resources[i].url = obj.resources[i].url + "?v=" + v;
    }
}
function dirLoop(dir) {
    var children = [];
    fs.readdirSync(dir).forEach(function (filename) {
        var path = "";
        if (dir.charAt(dir.length - 1) == "/") {
            path = dir + filename;
        }
        else {
            path = dir + "/" + filename;
        }
        var stat = fs.statSync(path);
        if (stat && stat.isDirectory()) {
            children = children.concat(dirLoop(path));
        }
        else {
            children.push(path);
        }
    });
    return children;
}


console.log("开始编译项目版本...");
var str = child_process.exec('egret publish ../warships/ --version 1', function (error, stdout) {
    if (error == null) {
        console.log(stdout);

        console.log("项目编译完成");
        console.log("开始编译特殊配置...");
        var defaultres = fs.readFileSync(resourcePath + defaultName, "utf8");
        var configres = fs.readFileSync(resourcePath + configName, "utf8");
        var defaultJson = JSON.parse(defaultres);
        var configJson = JSON.parse(configres);
        //编译index.html
        var indexhtmlArray_1 = '';
        lineReader.eachLine(indexName, function (line, last, cb) {
            var linestr = line;
            if (last) {
                fs.writeFileSync(indexName, indexhtmlArray_1);
                console.log("index.html 编译完成");
                cb(false); // stop reading
            }
            else {
                if (linestr.indexOf('egret="lib"') != -1) {
                    var startindex = linestr.indexOf('src="') + 5;
                    var endindex = linestr.indexOf('"><');
                    linestr = linestr.substring(startindex, endindex).split("?")[0];
                    var v = crc.crc32(fs.readFileSync(publishPath + linestr)).toString(16);
                    linestr = '<script egret="lib" src="' + linestr + "?v=" + v + '"></script>';
                    ;
                }
                else if (linestr.indexOf('10000100001') != -1) {
                    linestr = linestr.replace(/10000100001/, Math.floor(new Date().getTime() / 1000).toString());
                }
                else if (linestr.indexOf('data-show-paint-rect="true"') != -1) {
                    linestr = linestr.replace('data-show-paint-rect="true"', 'data-show-paint-rect="false"');
                }
                else if (linestr.indexOf('data-show-fps="true"') != -1) {
                    linestr = linestr.replace('data-show-fps="true"', 'data-show-fps="false"');
                }
                else if (linestr.indexOf('data-show-log="true"') != -1) {
                    linestr = linestr.replace('data-show-log="true"', 'data-show-log="false"');
                }
                else if (linestr.indexOf('var IsDebug = true') != -1) {
                    linestr = linestr.replace('var IsDebug = true', 'var IsDebug = false');
                }
                cb();
            }
            indexhtmlArray_1 += linestr + "\n";
        });
        //getV(configJson,vList);
        //fs.writeFileSync(resourcePath+configName,JSON.stringify(configJson));
        //console.log("config.res.json 完成编译...");

        var crcRes = fs.readFileSync(defaultName, "utf8");
        var crcJson = JSON.parse(crcRes);
        getDefaultCrc(crcJson,crcList);

        var ohterNameRes = fs.readFileSync(ohterName, "utf8");
        var ohterNameJson = JSON.parse(ohterNameRes);
        getOthersCrc(ohterNameJson,crcList);

        getV(defaultJson, vList);
        fs.writeFileSync(resourcePath + defaultName, JSON.stringify(defaultJson));
        console.log("defaultJson.res.json 完成编译...");

        var filepaths = dirLoop(resourcePath); //4653;
        var fileList_1 = {};
        filepaths.forEach(function (value) {

            if (vList[value] == null) {
                var v = crc.crc32(fs.readFileSync(value)).toString(16);
                var url = value.replace(resourcePath, "resource/");
                var d = 0;
                url = url.replace("resource/", "");
                fileList_1[url] = v;

                if(crcList[url] == v)
                    fs.unlinkSync(value);
                else
                    console.log("others修改过的文件..." + url);
            }
     
            if(crcList[value] == 1)
                fs.unlinkSync(value);
            
        });
        fs.writeFileSync(resourcePath + ohterName, JSON.stringify(fileList_1));
        console.log("others.res.json 完成编译...");

        //每次打包完成复制一下  改成手动复制
        // if(fs.existsSync(resourcePath + defaultName))
        //     fs.copyFileSync(resourcePath + defaultName, 'default.res.json');
        // if(fs.existsSync(resourcePath + ohterName))
        //     fs.copyFileSync(resourcePath + ohterName, 'others.res.json');
    }
    else {
        console.log("error", error);
    }
});
//# sourceMappingURL=main.js.map
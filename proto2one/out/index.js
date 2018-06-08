"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//node_modules/.bin/pbjs -t json  cfg/common.proto > cfg/common.json
var lineReader = require("line-reader");
var pbjsCli = require("protobufjs/cli");
var fs = require("fs");
var mergefile_1 = require("./mergefile");
var msgtsPath = "../H5frame/libs/msg.d.ts";
var protobufPath = "../H5frame/resource/cfg/common.proto";
var protobufJsonPath = "../H5frame/resource/cfg/common.json";
var msgHeadPath = "../H5frame/src/extended/MsgHead.ts";
var completeCount = 0;
var protoFiles = [];
function readDirSync(path) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele);
        if (info.isDirectory()) {
            readDirSync(path + "/" + ele);
        }
        else {
            console.log("file: " + path + ele);
            if (ele.indexOf(".proto") !== -1)
                protoFiles.push(path + ele);
        }
    });
}
function outMsgHeadTS() {
    var commonjson = JSON.parse(fs.readFileSync("./cfg/common.json").toString());
    var enums = commonjson.nested.MsgHead.values;
    var outContent = [];
    var msgHeads = commonjson.nested.MsgHead.values;
    for (var key in msgHeads) {
        outContent.push('           public static z' + msgHeads[key] + ':string  = "' + key + '"; ');
        outContent.push('           public static ' + key + ':{id:number,name:string,clz:protoTS.' + key + '}  = {id:' + msgHeads[key] + ',name:"' + key + '",clz:null}; ');
    }
    var msghead = "\n    class MsgHead{\n        " + outContent.join("\n") + "   \n    }";
    fs.writeFileSync("./cfg/MsgHead.ts", msghead);
}
readDirSync("./proto/");
pbjsCli.pbjs.main(["-t", "json", "--keep-case", "true"].concat(protoFiles), function (err, output) {
    if (err)
        throw err;
    else {
        fs.writeFileSync("./cfg/common.json", output);
        console.log("common.json -> 成功！");
        outMsgHeadTS();
        complete();
    }
    return 1;
    // do something with output
});
var one = new mergefile_1.MergeFile();
one.load(function () {
    console.log("common.proto  -> 成功！");
    complete();
});
// pbjsCli.pbjs.main([ "-t", "proto2","--keep-case","true"].concat(protoFiles),(err:any, output:string)=>{
//     if (err)
//         throw err;
//     else {
//         fs.writeFileSync("./cfg/common.proto", output);
//         console.log("common.proto -> 成功！");
//         complete();
//     }
//     return 1;
//     // do something with output
// });
pbjsCli.pbjs.main(["-t", "static-module", "-w", "commonjs", "--keep-case", "true"].concat(protoFiles), function (err, output) {
    if (err)
        throw err;
    else {
        fs.writeFileSync("./cfg/common.js", output);
        console.log("common.js -> 成功！");
        complete();
    }
    return 1;
    // do something with output
});
pbjsCli.pbts.main(["-m", "-n", "protoTS", "./cfg/common.js"], function (err, output) {
    if (err)
        throw err;
    else {
        output = output.replace(/\$protobuf/g, 'protobuf');
        fs.writeFileSync("./cfg/common.d.ts", output);
        var newOutFile_1 = [];
        lineReader.eachLine("./cfg/common.d.ts", function (line, last) {
            if (line == "export = protoTS;") {
                return;
            }
            newOutFile_1.push(line);
            if (line.indexOf("class Dce") != -1) {
                newOutFile_1.push("public send():void;");
            }
            if (last) {
                fs.writeFileSync("./cfg/common.d.ts", newOutFile_1.join("\n"));
                console.log("common.d.ts -> 成功！");
                complete();
            }
        });
    }
    return 1;
});
function complete() {
    completeCount++;
    if (completeCount >= 4) {
        fs.writeFileSync(msgtsPath, fs.readFileSync('./cfg/common.d.ts'));
        fs.writeFileSync(protobufPath, fs.readFileSync('./cfg/common.proto'));
        fs.writeFileSync(protobufJsonPath, fs.readFileSync('./cfg/common.json'));
        fs.writeFileSync(msgHeadPath, fs.readFileSync('./cfg/MsgHead.ts'));
        console.log("编译成功！");
    }
}
// if(type.name.indexOf("Dce")!==0){
//     push("");
//     push("public send():void;");
//     console.log();
// } 
//# sourceMappingURL=index.js.map
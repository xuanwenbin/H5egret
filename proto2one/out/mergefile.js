"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lineReader = require("line-reader");
var fs = require("fs");
var MergeFile = /** @class */ (function () {
    function MergeFile(callback, error) {
        this.str = "";
        this.files = [];
        this.outListArray = [];
        this.outPathProtubuf = "./cfg/common.proto";
        this.reg = /package|syntax|import/;
        if (callback)
            this.callback = callback;
    }
    MergeFile.prototype.readDirectory = function (dirPath, callBack) {
        if (fs.existsSync(dirPath)) {
            var _files_1 = fs.readdirSync(dirPath);
            _files_1.forEach(function (file, index) {
                var filePath = dirPath + "/" + file;
                var stats = fs.statSync(filePath);
                if (stats.isDirectory()) {
                    console.log('\n读取目录：\n', filePath, "\n");
                    this.readDirectory(filePath);
                }
                else if (stats.isFile()) {
                    var buff = fs.readFileSync(filePath);
                    if (buff[0].toString(16).toLowerCase() == "ef" && buff[1].toString(16).toLowerCase() == "bb" && buff[2].toString(16).toLowerCase() == "bf") {
                        //EF BB BF 239 187 191
                        console.log('\发现BOM文件：', filePath, "\n");
                        buff = buff.slice(3);
                        fs.writeFileSync(filePath, buff.toString(), { encoding: "utf-8" });
                    }
                }
                if (index >= _files_1.length - 1) {
                    callBack();
                }
            });
        }
        else {
            console.log('Not Found Path : ', dirPath);
        }
    };
    MergeFile.prototype.fileLoop = function () {
        var _this = this;
        if (this.files.length <= 0) {
            this.callback(); //全部结束
            return;
        }
        var pathUrl = "proto/" + this.files.shift();
        if (pathUrl.indexOf(".DS_Store") !== -1) {
            this.fileLoop();
            return;
        }
        this.outListArray = [];
        lineReader.eachLine(pathUrl, function (line, last) {
            var res = _this.reg.test(line);
            if (!res) {
                _this.outListArray.push(line.replace("\n", "").replace("\r", ""));
            }
            if (last) {
                var sourceStr = _this.outListArray.join("\n");
                fs.appendFileSync(_this.outPathProtubuf, sourceStr);
                _this.fileLoop();
                return false; // stop reading
            }
        });
    };
    MergeFile.prototype.load = function (callback) {
        var _this = this;
        if (callback)
            this.callback = callback;
        fs.writeFileSync(this.outPathProtubuf, "");
        this.outListArray = [];
        this.files = [];
        this.str = "";
        this.files = fs.readdirSync("proto");
        this.readDirectory('proto/', function () {
            _this.fileLoop();
        });
    };
    return MergeFile;
}());
exports.MergeFile = MergeFile;
//# sourceMappingURL=mergefile.js.map
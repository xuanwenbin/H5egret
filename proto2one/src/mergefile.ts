import lineReader = require('line-reader');
import fs = require('fs');

export class MergeFile {

    private str = "";
    private files = [];
    private outListArray = [];
    private outPathProtubuf = "./cfg/common.proto";
    private reg = /package|syntax|import/;
    private callback: Function;

    constructor(callback?, error?) {
        if(callback)
            this.callback = callback;
    }

    private readDirectory(dirPath, callBack?) {
        if (fs.existsSync(dirPath)) {
            let _files = fs.readdirSync(dirPath);

            _files.forEach(function (file, index) {
                let filePath = dirPath + "/" + file;
                let stats = fs.statSync(filePath);

                if (stats.isDirectory()) {
                    console.log('\n读取目录：\n', filePath, "\n");
                    this.readDirectory(filePath);
                } else if (stats.isFile()) {
                    let buff = fs.readFileSync(filePath);
                    if (buff[0].toString(16).toLowerCase() == "ef" && buff[1].toString(16).toLowerCase() == "bb" && buff[2].toString(16).toLowerCase() == "bf") {
                        //EF BB BF 239 187 191
                        console.log('\发现BOM文件：', filePath, "\n");

                        buff = buff.slice(3);
                        fs.writeFileSync(filePath, buff.toString(), {encoding:"utf-8"});
                    }
                }
                if (index >= _files.length - 1) {
                    callBack();
                }
            });

        } else {
            console.log('Not Found Path : ', dirPath);
        }
    }



    private fileLoop() {

        if (this.files.length <= 0) {
            this.callback();//全部结束
            return;
        }
        let pathUrl = "proto/" + this.files.shift();
        if(pathUrl.indexOf(".DS_Store")!==-1){
            this.fileLoop();
            return;
        }
        this.outListArray = [];
        lineReader.eachLine(pathUrl,  (line, last)=>{
            var res = this.reg.test(line);

            if (!res) {
                this.outListArray.push( line.replace("\n", "").replace("\r", ""));
            }

            if (last) {
                let sourceStr = this.outListArray.join("\n");
                fs.appendFileSync(this.outPathProtubuf, sourceStr);
                this.fileLoop();
                return false; // stop reading
            }
        });
    }

    public load(callback?) {
        if(callback)
            this.callback = callback;
        fs.writeFileSync(this.outPathProtubuf, "");
        this.outListArray = [];
        this.files = [];
        this.str = "";

        this.files = fs.readdirSync("proto");
        
        this.readDirectory('proto/', () => {
            this.fileLoop();
        });

    }

}


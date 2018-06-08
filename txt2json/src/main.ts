/**
 * 本工具实现了txt文本数据导出为json的数据，需要注意txt数据中，必须包含id这个字段，并且唯一。
 * 工具中会读取txt文件夹中的  "表格名称介绍.xlsx" 文件并解析中出哪些文件需要导出。
 * 
 * 软件环境 nodejs,vc 11,12++ , Python2.7
 * 编写本程序需要安装环境 npm typescript -g
 * 执行本程序 nodejs out/main  --path txt/表格名称介绍.xlsx --out txt|txt_cn|txt_jp
 * 
 * @author yangxiao 
 */


import * as fs from 'fs';
import * as lineReader from 'line-reader';
import * as xlsx from 'node-xlsx';
import * as path from 'path';
import * as iconvLite from 'iconv-lite';
import * as jszip from 'jszip';

let row = 0;
let clienttable = [];
let typescriptStr = '';//生成.d.ts的文件
let typescriptHeadStr = "";//生成程序中使用的class枚举文件
let xlsPath:string = process.argv[2];
let sourceTxtPath:string = process.argv[3];

let json2dts = "../main/libs/";
let configts = "../main/src/extended/";
let outConfigPath = "../main/resource/cfg/config.cfg";
let zip = new jszip();

function deleteFolderRecursive(_path) {

    var files = [];

    if (fs.existsSync(_path)) {

        files = fs.readdirSync(_path);

        files.forEach(function (file, index) {

            var curPath = _path + "/" + file;

            if (fs.statSync(curPath).isDirectory()) { // recurse

                deleteFolderRecursive(curPath);

            } else { // delete file

                fs.unlinkSync(curPath);

            }

        });

        fs.rmdirSync(_path);
    }
    if (!fs.existsSync(_path))
        fs.mkdirSync(_path);
 
};


function getHeadTemple(className: string, item: any[]) {

    let str = "public static " + className + ":{name:string,clz:JsonTs." + className + "} = {name:\"" + className + "\",clz:null};\n";
    typescriptHeadStr += str;
}
function outHeadTemple() {
    typescriptHeadStr = "class CfgHead{\n" + typescriptHeadStr + "}";
    fs.writeFileSync(path.normalize(configts + "/CfgHead.ts"), typescriptHeadStr);

}


function getDesTemple(className: string, item: any[]) {
    let str = "class " + className + "{\n";
    for (let key in item) {
        if (typeof (item[key]) == "number")
            str += "        public " + key + ":number;\n";
        else if(item[key] instanceof Array){
            str += "        public " + key + ":any[];\n";
        }else{
            str += "        public " + key + ":string;\n";
        }
    }

    str += "    }\n";
    typescriptStr += str;
}

function outDesTemple() {
    typescriptStr = "declare namespace JsonTs {\n" + typescriptStr + "}";
    fs.writeFileSync(path.normalize(json2dts + "/JsonConfig.d.ts"), typescriptStr);

}

let index11 = 0;
function eachLien(filePath: string, importType) {

    let headerType: string[] = [];
    let headerName: string[] = [];
    let headerIsImport: string[] = [];
    let body: string[] = [];
    let outListObject = {};
    let outListArray = [];
    filePath = filePath.replace("\\", "/");
    let fileName = filePath.split("/")[1].split(".")[0];
    let zipFileName = path.normalize(fileName + ".json");
    let tempStr = "";
    let readFile = fs.readFileSync(filePath);
    let str = iconvLite.decode(readFile, 'gbk');
    let callBack = checkFile;
    
    let rowStr = null;
    if(str.indexOf("\r\n")!==-1){
        rowStr = str.split(/\r?\n/);
    }else {
        rowStr = str.split(/\r|\n/);
    }

    let rowStr1 = [];
    rowStr.forEach((value, index, array) => {
        if(value.length>1){
            rowStr1.push(value);
        }
    });
    rowStr1.forEach((value, index, array) => {
        if (index == 0) {//类型
            headerType = value.split("\t");
            return;
        }else if (index == 1) {//变量名
            headerName = value.split("\t");
            if (headerName[0] != "id") {
                headerName[0] = "id";
            }
            return;
        }else if(index == 2){
            headerIsImport = value.split("\t");
            return;
        }else if (value.charAt(0) == "#") {//注视
            return;
        }
        let item = {};
        body = value.split("\t");
        headerName.forEach((v1, i1, array) => {
            if(headerIsImport[i1]=="0"){
                return;
            }else if (headerType[i1] == "INT" || headerType[i1] == "﻿INT") {
                item[v1] = parseInt(body[i1]);
            }else if(headerType[i1] == "FLOAT" || headerType[i1] == "﻿FLOAT"){
                item[v1] = parseFloat(body[i1]);
            }else if(headerType[i1] == "[INT]" || headerType[i1] == "﻿[INT]"){
                let splits =  body[i1].split("|");
                let nums = [];
                for(let i =0;i<splits.length;i++){
                    nums.push(parseInt(splits[i]));
                }
                item[v1] = nums;
            }else if(headerType[i1] == "[STRING]" || headerType[i1] == "﻿[STRING]"){
                item[v1] = body[i1].split("|");
            }else {
                item[v1] = body[i1];
            }
        });
        if (item["id"] != undefined) {
            outListObject[item["id"]] = item;
        }
        outListArray.push(item);
        if (index == (array.length - 1)) {
            let str = "";
            if (importType == 1) {
                str = JSON.stringify(outListArray);
            } else {
                str = JSON.stringify(outListObject);
            }
            if (str.indexOf("\\n") != -1) {
                str = str.replace(/\\n/g, 'n');
            }
            getDesTemple(fileName, outListArray[0]);
            getHeadTemple(fileName, outListArray[0]);
            zip.file(zipFileName, str);
            console.log(zipFileName);
        }
    });
    callBack();
}
 
function checkFile() {
    row++;
    if (row >= clienttable.length) {

        outDesTemple();
        outHeadTemple();
        zip.generateAsync({
            type: "nodebuffer",
            compression: "DEFLATE"
        }).then(value => {
            fs.writeFile(outConfigPath, value, function (err) {
                if (err != null)
                    console.log("error 打包失败", err)
                else
                    console.log("zip打包完成")
            });
        });
        return;
    }
    let item = clienttable[row];
    let filePath = path.normalize(path.dirname(xlsPath.replace("txt/",sourceTxtPath+"/")) + "/" + item[1] + ".txt");
    if (fs.existsSync(filePath)) {
        eachLien(filePath, 2);
    } else {
        console.log(filePath, " - 不存在.");
        checkFile();
    }
}
function getXlsList() {
    let xlsObject = xlsx.parse(xlsPath);
    let table0 = xlsObject[0];

    let array = [];
    array.push(null);
    table0.data.forEach(element => {
        if(typeof element[0] != "number"){
            return;
        }
        if (element[3] == 1) {
            array.push(element);
        }
    });

    return array;
}

function main() {
    clienttable = getXlsList();
    checkFile();
}

main();

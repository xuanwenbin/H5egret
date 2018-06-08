import fs = require('fs');
import crc = require('crc');
import lineReader = require('line-reader');
import child_process = require('child_process');

let publishPath = "../warships/bin-release/web/1/"
let resourcePath = publishPath + "resource/";
let defaultName = "default.res.json";
let configName = "config.res.json";
let ohterName = "others.res.json";
let indexName = publishPath + "index.html";


let vList = {};//这里被记录过的文件

function getV(obj:any,vList){
    let len = obj.resources.length;
    for(let i=0;i<len;i++){
        obj.resources[i].url = obj.resources[i].url.split("?")[0];  
        vList[resourcePath + obj.resources[i].url] = 1;
        let v = crc.crc32(fs.readFileSync(resourcePath + obj.resources[i].url)).toString(16);
        obj.resources[i].url = obj.resources[i].url + "?v="+v;
    }
}

function dirLoop(dir:string) {  
    var children:string[] = []  
    fs.readdirSync(dir).forEach(function(filename){ 
        var path = "";
        if(dir.charAt(dir.length-1)=="/"){
            path = dir+filename;
        }else{
            path = dir+"/"+filename;
        } 
        var stat = fs.statSync(path)  
        if (stat && stat.isDirectory()) {  
            children = children.concat(dirLoop(path))  
        }  
        else {  
            children.push(path);  
        }  
    })  
  
    return children  
}
 
console.log("开始编译项目版本...");
let str = child_process.exec('egret publish ../warships/ --version 1',(error,stdout)=>{
    if(error==null){
        console.log(stdout);
        console.log("项目编译完成");



        console.log("开始编译特殊配置...");
        let defaultres = fs.readFileSync(resourcePath+defaultName,"utf8");
        let configres = fs.readFileSync(resourcePath+configName,"utf8");

        let defaultJson = JSON.parse(defaultres);
        let configJson = JSON.parse(configres);

        //编译index.html
        let indexhtmlArray = '';
        lineReader.eachLine(indexName, function(line, last, cb) {

        let linestr = line;
        if (last) {
            fs.writeFileSync(indexName,indexhtmlArray);
            console.log("index.html 编译完成");
            cb(false); // stop reading
        } else {
            if(linestr.indexOf('egret="lib"')!=-1){
                let startindex = linestr.indexOf('src="')+5;
                let endindex = linestr.indexOf('"><');
                linestr = linestr.substring(startindex,endindex).split("?")[0];
                let v = crc.crc32(fs.readFileSync(publishPath + linestr)).toString(16);
                linestr = '<script egret="lib" src="'+ linestr + "?v=" + v+'"></script>';;
            }else if(linestr.indexOf('10000100001')!=-1){
                linestr = linestr.replace(/10000100001/,Math.floor(new Date().getTime()/1000).toString());
            }else if(linestr.indexOf('data-show-paint-rect="true"')!=-1){
                linestr = linestr.replace('data-show-paint-rect="true"','data-show-paint-rect="false"');
            }else if(linestr.indexOf('data-show-fps="true"')!=-1){
                linestr = linestr.replace('data-show-fps="true"','data-show-fps="false"');
            }else if(linestr.indexOf('data-show-log="true"')!=-1){
                linestr = linestr.replace('data-show-log="true"','data-show-log="false"');
            }else if(linestr.indexOf('var IsDebug = true')!=-1){
                linestr = linestr.replace('var IsDebug = true','var IsDebug = false');
            } 
            

            cb();
        }
        indexhtmlArray += linestr+"\n";
        }); 

        //getV(configJson,vList);
        //fs.writeFileSync(resourcePath+configName,JSON.stringify(configJson));
        //console.log("config.res.json 完成编译...");
        getV(defaultJson,vList);
        fs.writeFileSync(resourcePath+defaultName,JSON.stringify(defaultJson));
        console.log("defaultJson.res.json 完成编译...");
        let filepaths = dirLoop(resourcePath);//4653;
        let fileList={};

        filepaths.forEach(value=>{
            if(vList[value]==null){
                let v = crc.crc32(fs.readFileSync(value)).toString(16);
                let url = value.replace(resourcePath,"resource/");
                let d = 0;
                url = url.replace("resource/",""); 
                fileList[url]=v; 
            }
        });
        fs.writeFileSync(resourcePath+ohterName,JSON.stringify(fileList));
        console.log("others.res.json 完成编译...");

    }else{
        console.log("error",error);
    }
});

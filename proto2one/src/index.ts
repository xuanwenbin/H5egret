//node_modules/.bin/pbjs -t json  cfg/common.proto > cfg/common.json
import lineReader = require('line-reader');
import pbjsCli = require("protobufjs/cli"); 
import fs = require("fs");
import {MergeFile}  from './mergefile';


let msgtsPath = "../main/libs/msg.d.ts";
let protobufPath = "../main/resource/cfg/common.proto";
let protobufJsonPath = "../main/resource/cfg/common.json";
let msgHeadPath = "../main/src/extended/MsgHead.ts";

let completeCount = 0;
let protoFiles= [];
function readDirSync(path){  
    var pa = fs.readdirSync(path);  
    pa.forEach(function(ele,index){  
        var info = fs.statSync(path+"/"+ele)      
        if(info.isDirectory()){  
            readDirSync(path+"/"+ele);  
        }else{  
            console.log("file: "+path+ele);
            if(ele.indexOf(".proto")!==-1)
                protoFiles.push(path+ele);  
        }     
    })  
} 

function outMsgHeadTS(){
    
    let commonjson =JSON.parse(fs.readFileSync("./cfg/common.json").toString());
    let enums:any[] = commonjson.nested.MsgHead.values;
    let outContent = [];
    let msgHeads = commonjson.nested.MsgHead.values;
    for(let key in msgHeads){
        
        outContent.push('           public static z'+msgHeads[key]+':string  = "'+key+'"; ');
        outContent.push('           public static '+key+':{id:number,name:string,clz:protoTS.'+key+'}  = {id:'+msgHeads[key]+',name:"'+key+'",clz:null}; ');
    }
    

    let msghead = `
    class MsgHead{
        `+outContent.join("\n")+`   
    }`;

    fs.writeFileSync("./cfg/MsgHead.ts", msghead);
}


readDirSync("./proto/");

pbjsCli.pbjs.main([ "-t", "json","--keep-case","true"].concat(protoFiles),(err:any, output:string)=>{
    if (err)
        throw err;
    else{
        fs.writeFileSync("./cfg/common.json", output);
        console.log("common.json -> 成功！");
        outMsgHeadTS();
        complete();
    }
    return 1;
    // do something with output
});

let one = new MergeFile();
one.load(()=>{
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

pbjsCli.pbjs.main([ "-t", "static-module","-w","commonjs","--keep-case","true"].concat(protoFiles),(err:any, output:string)=>{
    if (err)
        throw err;
    else{
        fs.writeFileSync("./cfg/common.js", output);
        console.log("common.js -> 成功！");
        complete();
    }
    return 1;
    // do something with output
});

pbjsCli.pbts.main(["-m","-n","protoTS","./cfg/common.js"],(err, output)=>{
    if (err)
        throw err;
    else{
        output = output.replace(/\$protobuf/g,'protobuf'); 
        fs.writeFileSync("./cfg/common.d.ts", output);
        
        let newOutFile = [];
        lineReader.eachLine("./cfg/common.d.ts",  (line, last)=>{
            
            if(line == "export = protoTS;"){
                return;
            }
            newOutFile.push(line);
            if(line.indexOf("class Dce")!=-1){
                newOutFile.push("public send():void;");
            }
            if(last){
                fs.writeFileSync("./cfg/common.d.ts", newOutFile.join("\n"));
                console.log("common.d.ts -> 成功！");
                complete();
            }
        });
    }
    return 1;
});



function complete(){
    completeCount++;    
    if(completeCount>=4){
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
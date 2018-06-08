/**
 * 日志输出
 * @yangxiao
 */
module fw.Console {

    export function log(sender?: any, ...optionalParams: any[]) {
        if (Config.IsDebug) {
            console.log(formatMessage(sender, optionalParams));
        }
    }

    export function log2EgretConsole(sender?: any, ...optionalParams: any[]) {
        if (Config.IsDebug) {
            egret.log(formatMessage(sender, optionalParams));
        }
    }

    export function trace(sender?: any, ...optionalParams: any[]) {
        if (Config.IsDebug) {
            console.log(formatMessage(sender, optionalParams));
        }
    }

    export function error(sender?: any, ...optionalParams: any[]) {
        if (Config.IsDebug) {
            console.error(formatMessage(sender, optionalParams));
        }
    }

    function formatMessage(sender: any, messages?: any[]): string {
        let rtn: string = "";
        if (sender == null)
            rtn += "null ";
        else if (sender == undefined)
            rtn += "undefined ";
        else if (typeof sender == "string")
            rtn += (sender + ",");
        else if (typeof sender == "object" && sender["__class__"])
            rtn += ("[" + sender['__class__'] + "] ");
        else if (sender["toString"])
            rtn += (sender.toString() + ",");
        else
            rtn += (<string>sender + ",");

        if (messages && messages.length)
        {
            rtn += messages.join(",");
        }
        return rtn;
    }
}
// Add your code here
//% weight=0 color=#C52746 icon="\uf1c0" block="Database"
//% advanced=false
namespace arcadeDB{

const PRE = "DB.";
const PRE_CFG = PRE + "C.";
const PRE_CFG_TEXT = PRE_CFG + "T.";
const PRE_CFG_NUM = PRE_CFG + "N.";
const PRE_LIST = PRE + "L.";




//% blockId=dbWriteVal
//% block="set key $key to text $val"
//% img.shadow="lists_create_with"
//% icon="\uf0e8" 
export function setTextValue(key:string, val: string) {
    settings.writeString(PRE_CFG_TEXT + key, val)
}

//% blockId=dbReadVal
//% block="get key $key as text"
//% img.shadow="lists_create_with"
//% icon="\uf0e8" 
export function getTextValue(key: string, val: string): string {
    return settings.readString(PRE_CFG_TEXT + key)
}

//% blockId=dbWriteVal
//% block="set key $key to number $val"
//% img.shadow="lists_create_with"
//% icon="\uf0e8" 
export function setNumberValue(key: string, val: number) {
    settings.writeNumber(PRE_CFG_NUM + key, val)
}

//% blockId=dbReadVal
//% block="get key $key as number"
//% img.shadow="lists_create_with"
//% icon="\uf0e8" 
export function getNumberValue(key: string, val: number): number {
    return settings.readNumber(PRE_CFG_NUM + key)
}





}
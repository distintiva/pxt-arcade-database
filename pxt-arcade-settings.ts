// Add your code here
//% weight=0 color=#C52746 icon="\uf1c0" block="Database"
//% advanced=false
//% groups="['Pairs Key = Value', 'Lists']"
namespace arcadeDB{

const PRE = "DB.";
const PRE_CFG = PRE + "C.";
const PRE_CFG_TEXT = PRE_CFG + "T.";
const PRE_CFG_NUM = PRE_CFG + "N.";
const PRE_LIST = PRE + "L.";




//% blockId=setTextValue
//% block="set key $key to text $val"
//% group="Pairs Key = Value"
export function setTextValue(key:string, val: string) {
    settings.writeString(PRE_CFG_TEXT + key, val)
}

//% blockId=getTextValue
//% block="get key $key as text"
//% group="Pairs Key = Value"
export function getTextValue(key: string, val: string): string {
    return settings.readString(PRE_CFG_TEXT + key)
}

//% blockId=setNumberValue
//% block="set key $key to number $val"
//% group="Pairs Key = Value"
export function setNumberValue(key: string, val: number) {
    settings.writeNumber(PRE_CFG_NUM + key, val)
}

//% blockId=getNumberValue
//% block="get key $key as number"
//% group="Pairs Key = Value"
export function getNumberValue(key: string, val: number): number {
    return settings.readNumber(PRE_CFG_NUM + key)
}

//% blockId=existsKey
//% block="exists key $key"
//% group="Pairs Key = Value"
export function existsKey(key: string): boolean {
    return settings.exists(PRE_CFG_NUM + key) || settings.exists(PRE_CFG_TEXT + key);
    
}

//% blockId=removeKey
//% block="remove key $key"
//% group="Pairs Key = Value"
export function removeKey(key: string): void {
    settings.remove(PRE_CFG_NUM + key);
    settings.remove(PRE_CFG_TEXT + key);
}

/*

//% blockId=listAddValue
//% block="add to list $list value $val"
//% group="Lists"
export function listAddValue(list:string,  val: number) {
    
}

//% blockId=listGetValue
//% block="value from list $list at index $index"
//% group="Lists"
export function listGetValue(list: string, index: number):number {
    return 0
}

//% blockId=listCount
//% block="length of $list"
//% group="Lists"
export function listCount(list: string): number {
    return 0
}
*/




}
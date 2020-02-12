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
    settings.writeNumber(PRE_CFG_NUM + key,  parseInt( val ) );

    settings.writeNumber(PRE+ "ON", 1);
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
    settings.writeString(PRE_CFG_TEXT + key, val.toString()) 

    settings.writeNumber(PRE + "exists", 1); 
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

//% blockId=deleteAll
//% block="delete database"
//% group="Database"
export function deleteAll(): void {
   
   settings.clear();
  /*  const allkeys:string[] = settings.list(PRE);

    allkeys.forEach(function (value: string, index: number) {
        settings.
    })*/

}


//% blockId=exists
//% block="database exists"
//% group="Database"
export function exists(): boolean {
    return settings.exists(PRE + "ON");
}


//% blockId=toLine
//% block="to line $val"
//% group="Other"
export function toLine(val:string):string{
    if(val.length>=24) return val;

    let blanks: number = 24 - val.length;
    for (let c = 0 ;c<=blanks;c++){
        val = val.concat(" ");
    }
    return val;

}


//% blockId=toLines
//% block="lines $val"
//% group="Other"
export function toLines(val: string[]): string {
    
    let ret: string = "";
    for(let l =0; l< val.length; l++ ){
                ret = ret.concat(  toLine( val[l])  );
    }
    return ret;

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
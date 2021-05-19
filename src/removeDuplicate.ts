
export const removeDuplicate= (data:Array<any>)=>{
return data.filter((item,i,list)=> list.indexOf(item) ==i)
}
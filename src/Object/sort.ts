const sort = (data:Array<{[key:string]:any}>,by:string)=>{
    let obj:any={}
    data.map(item=> obj[item[by]]=item)
    return obj
}
export default sort
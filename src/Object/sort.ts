const sort = (data:Array<[key:string]>,by:string)=>{
    let obj:any={}
    data.map(item=> obj[by]=item)
    return obj
}
export default sort
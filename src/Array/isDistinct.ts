import { distinct } from "../lib/distinct"

const isDistinct = (data: any[], value: any) => {
    if(value)
    return !(data.filter(item => item == value).length > 1)
    return !data.find((item,i,list)=> list.indexOf(item) !==i)
}

export default isDistinct
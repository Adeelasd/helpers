import { distinct } from "../lib/distinct"

const isDistinct = (data: any[], value: any) => {
    return !data.find((item,i)=> !distinct(value,i,data))
}

export default isDistinct
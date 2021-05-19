import { distinct } from "../lib/distinct"

const removeDuplicate = (data: Array<any>) => {
    return data.filter(distinct)
}

export default removeDuplicate
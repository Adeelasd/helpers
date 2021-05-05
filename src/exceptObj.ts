/**
 * @description Removes keys from object first param is Object while second is Array of strings 
 */
export const exceptObj = (items: { [key: string]: any }, values: Array<string>): { [item: string]: any } => {
    let objs = Object.keys(items)
    let res: any = {}
    objs.map(item => {
        if (!values.includes(item))
            res[item] = items[item]
    })
    return res
}

/** 
 * @description Returns (string | number | undefined | null) as Int
 */
export const returnInt = (data: string | number) => {
    if (typeof data == "string")
        return parseInt(data)
    if (!data)
        return 0
    return data

}
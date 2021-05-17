/**
 * @description Removes keys from object first param is Object while second is Array of strings 
 */
 const exceptObj = (items: { [key: string]: any }, values: Array<string>): { [item: string]: any } => {
    let objs = Object.keys(items)
    let res: any = {}
    objs.map(item => {
        if (!values.includes(item))
            res[item] = items[item]
    })
    return res
}

export { exceptObj}
/** 
 * @description Returns (any) as Int
 */
export const returnAsInt = (data: any) => {
    if (typeof data == "string")
        return parseInt(data)
    if (!data)
        return 0
    return typeof data == "number" ? data : 1
}
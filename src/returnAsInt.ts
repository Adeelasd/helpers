/** 
 * @description Returns (string | number | undefined | null) as Int
 */
 export const returnAsInt = (data: string | number) => {
    if (typeof data == "string")
        return parseInt(data)
    if (!data)
        return 0
    return data

}
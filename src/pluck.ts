export const pluck = (data: Array<{ [key: string]: any }>, name: string) => {
    return data.map(item => item[name])
}
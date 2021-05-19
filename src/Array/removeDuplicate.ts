const removeDuplicate = (data: Array<any>) => {
    return data.filter((item: any, i: number, list: string | any[]) => list.indexOf(item) === i)
}
export default removeDuplicate
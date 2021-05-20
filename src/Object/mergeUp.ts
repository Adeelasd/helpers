const mergeUp = (data: { [key: string]: any }, value: string, overwrite = true) => {
    let ref = Object.assign({}, data)
    delete ref[value]
    let keys = Object.keys(data[value])
    if (overwrite)
        for (let items of keys) {
            ref[items] = data[value][items]
        }
    else
        for (let items of keys) {
            if (!data[items])
                ref[items] = data[value][items]
        }
    return ref
}

export default mergeUp
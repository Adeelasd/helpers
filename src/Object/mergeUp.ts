const mergeUp = (data: { [key: string]: any }, value: string, overwrite = false) => {
    let ref = Object.assign({}, data)
    delete ref[value]
    let keys = Object.keys(data[value])
    for (let items of keys) {
        ref[items] = data[value][items]
    }
    return ref
}
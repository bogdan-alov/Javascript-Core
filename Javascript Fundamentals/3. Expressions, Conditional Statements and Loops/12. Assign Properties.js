function assignProperties(params) {
    let obj = {}
    for (let index = 0; index < params.length; index= index+ 2) {
        obj[params[index]] = params[index + 1]
        
    }

    console.log(obj)
}


assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])
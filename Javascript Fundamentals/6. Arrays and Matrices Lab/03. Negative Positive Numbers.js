function solve(params) {
    arr = []

    for (let i = 0; i < params.length; i++) {
        if (params[i] < 0) {
            arr.unshift(params[i])
        } else {
            arr.push(params[i])   
        }
    }

    console.log(arr.join('\n'))
}

solve([7, -2, 8, 9])
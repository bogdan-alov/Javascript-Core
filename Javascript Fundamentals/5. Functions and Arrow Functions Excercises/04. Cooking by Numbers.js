function cookWithNumbers(params) {
    let number = params[0]
    let [chop,dice,slice,bake,fillet] = [number => number / 2,number => Math.sqrt(number),number=> number + 1, number => number * 3, number => number - ((number/ 100) * 20)]

    for (let i = 1; i < params.length; i++) {
        if (params[i] === 'chop') {
            console.log(number = chop(number))
        } else if (params[i] === 'dice') {
            console.log(number = dice(number))
        } else if (params[i] === 'spice') {
            console.log(number = slice(number))
        } else if (params[i] === 'bake') {
            console.log(number = bake(number))
        } else if (params[i] === 'fillet') {
            console.log(number = fillet(number))
        }
        
    }
}


cookWithNumbers([9,'dice','spice','chop','bake','fillet'])
function solve(params) {
    sum = []
    for (let i = 1; i <= params.length; i++) {
        if (i % 2 !== 0) {
            sum.push(params[i - 1])
        }
        
    }

    return sum.join(' ').toString()
}

console.log(solve(['20', '30', '40']))
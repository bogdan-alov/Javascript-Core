function averageValue(n) {
    n = n.toString().split('').map(Number)
    let sum = 0
    let average = 0
    for (let i = 0; i < n.length; i++) {
        sum += n[i]
    }
    
    while (average < 5) {
        average = sum / n.length
        if (average > 5) {
            break
        }
        sum +=9
        n.push(9)
    }


    console.log(n.join(''))
}


averageValue(5835)
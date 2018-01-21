function roundNumber(params) {
    let [number,precision,numPrecision] = [params[0],params[1], (params[0].toString().split('.')[1] || []).length]
    if (numPrecision <= precision) {
        console.log(number)
    }
    else{
        if (precision > 15) {
            precision = 15
        }
        console.log(number.toFixed(precision))
    }
}


roundNumber([10.512312312, 3])
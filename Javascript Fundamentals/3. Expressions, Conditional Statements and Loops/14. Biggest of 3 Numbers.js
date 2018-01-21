function biggestNumber(params) {
    let [number1,number2,number3] = [params[0], params[1], params[2]]

    if (number1 > number2 && number1 > number3) {
        console.log(number1)
    }else if (number2 > number1 && number2 > number3) {
        console.log(number2)
    } else {
        console.log(number3)
    }
}


biggestNumber([1,2,3])
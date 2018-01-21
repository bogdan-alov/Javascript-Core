function checkIfOddOrEven(number) {
    if (number % 1 !== 0) {
        console.log("invalid")
    }
    else{
        if (number % 2 === 0) {
            console.log("even")
        }
        else{
            console.log("odd")
        }
        
    }
}


checkIfOddOrEven(2)

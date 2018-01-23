function calculate(number1,number2,sign) {
    switch (sign) {
        case "+":
            return number1 + number2
            break;
        case "-":
            return  number1 - number2
            break;
        case "*":
            return number1 * number2
        
        case "/":
            return  number1 / number2

        default:
            break;
    }
}


console.log(calculate(2,3,"+"))
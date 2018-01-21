function stringOfNumbers(n){
    let word = ""
    for (let index = 1; index <= n; index++) {
        word += index; 
    }
    return word;
}


console.log(stringOfNumbers(11))
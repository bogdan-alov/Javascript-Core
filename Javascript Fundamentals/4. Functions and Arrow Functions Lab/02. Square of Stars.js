function squareOfStars(n) {
    let result = ""
    if (n === undefined) {
        n = 5
    }
    for (let i = 0; i < n; i++) {
        result += "* ".repeat(n) + "\n"
        
    }

    console.log(result)
}

squareOfStars()
function drawTriangle(n) {
    result = ""
    for (let i = 1; i <= n; i++) {
        result += "*".repeat(i)
        result += "\n"
    }
    for (let i = n-1; i > 0; i--) {
        result += "*".repeat(i)
        result += "\n"
    }
    console.log(result)
}


drawTriangle(10)
function colourNumbers(n){
    n = n + 2
    let html = "<ul>\n"
    for (let i = 1; i < n; i++) {
        if (i === n - 1) {
            html += "<\\ul>"
            break
        }
        if (i % 2 == 0) {
            html += `  <li><span style='color:blue'>${i}</span></li>\n`
        }
        else{
            html += `  <li><span style='color:green'>${i}</span></li>\n`
        }
    }
    console.log(html)
}


colourNumbers(10)
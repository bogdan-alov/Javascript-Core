function drawTable(n) {
    let result = '<table border="1">\n';
    result += "  <tr><th>x</th>"
    for (let r = 1; r <= n; r++) {
        result += `<th>${r}</th>`
    }
    result += `</tr>\n`;
    console.log(result)      
    for (let r = 1; r <= n; r++) {
        result += `  <tr><th>${r}</th>`;
        for (let c = 1; c <= n; c++) {
            result += `<td>${r*c}</td>`; 
        }
        result += `</tr>\n`;        
    }
    result += '</table>'
    console.log(result);
}


drawTable(5)
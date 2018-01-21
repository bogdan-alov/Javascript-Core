function drawBoard(n){
let html = "<div class=\"chessboard\">\n"

for (let i = 0; i < n; i++) {
    html += "  <div>\n"
    for (let j = 0; j < n; j++) {
        if (i % 2 ==0) {
            if (j % 2 ==0) {
                html += "    <span class=\"black\"></span>\n"
            }
            else{
                html += "    <span class=\"white\"></span>\n"
            }
        }
        else{
            if (j % 2 ==0) {
                html += "    <span class=\"white\"></span>\n"
            }
            else{
                html += "    <span class=\"black\"></span>\n"
            }
        }
    }

    html += "  </div>\n"
}

html += "</div>"

return html
}


console.log(drawBoard(3))
function solution(matrix) {
    let [row1_sum, row2_sum,row3_sum] = [0,0,0]

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0) {
                row1_sum += matrix[i][j]
            }else if (i===1) {
                row2_sum += matrix[i][j]
            }else{
                row3_sum += matrix[i][j]
            }
        }
    }

    console.log( row1_sum === row2_sum && row1_sum === row3_sum ? true : false)
}


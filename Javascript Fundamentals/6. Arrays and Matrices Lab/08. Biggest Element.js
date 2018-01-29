function solution(matrix) {
    let big_numbers = []
    for (let arr = 0; arr < matrix.length; arr++) {
        let largest_number = Math.max.apply(Math, matrix[arr])
        big_numbers.push(largest_number)
    }

    console.log(Math.max.apply(Math, big_numbers))

}

solution([[20, 50, 10],[8, 33, 145]])
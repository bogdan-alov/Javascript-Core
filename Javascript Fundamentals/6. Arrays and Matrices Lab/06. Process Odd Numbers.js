function solution(params) {
    let array = []
    for (let i = 0; i < params.length; i++) {
        if (i % 2 !== 0) {
            array.unshift(params[i] * 2)
        }
    }
    console.log(array.join(' '))
}


solution([3, 0, 10, 4, 7, 3])
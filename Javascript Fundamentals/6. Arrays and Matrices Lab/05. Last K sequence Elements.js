function solution(n,k) {
    let array = []

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            array.push(1)
        }else{
            array.push(array.slice(Math.max(0, array.length-k)).reduce(function(a, b) { return a + b; }, 0))
        }
        
    }

    console.log(array.join(' '))
}

solution(6,3)
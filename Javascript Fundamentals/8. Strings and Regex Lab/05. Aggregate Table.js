function solution(params) {
    let arr = []
    let sum = 0
    for (let i = 0; i < params.length; i++) {
        let myRegexp = /([a-zA-Z ]+)[|]\s(\d+)/g;
        let match = myRegexp.exec(params[i])
        arr.push(match[1].trim())
        sum += parseInt(match[2])
    }

    console.log(arr.join(', '))
    console.log(sum)  
}

solution(['| Sofia           | 300','| Veliko Tarnovo  | 500','| Yambol          | 275'])
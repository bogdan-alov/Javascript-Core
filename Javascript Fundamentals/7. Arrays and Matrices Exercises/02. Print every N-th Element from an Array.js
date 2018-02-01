function solution(params) {
    let n = parseInt(params[params.length - 1])
    params.splice(-1,1)

    for (let i = 0; i < params.length; i = i + n) {
        console.log(params[i])
    }
}

solution(['dsa','asd','test','tset',2])
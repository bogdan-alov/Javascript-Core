function solution(params) {
    let delimeter = params[params.length - 1]
    params.splice(-1,1)
    console.log(params.join(delimeter))
}

solution(['One','Two','Three','-'])
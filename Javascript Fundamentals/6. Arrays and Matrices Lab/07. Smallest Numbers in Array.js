function solution(params) {
    params = params.sort(function(a, b){return a-b}).slice(0,2)

    console.log(params.join(' '))
}

solution([30,15,50,5])
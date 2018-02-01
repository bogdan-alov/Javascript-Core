function solution(params) {
    let n = Number(params.pop());

    for (let i = 0; i < n ; i++) {
        params.unshift(params.pop());
    }
    console.log(params.join(" "));
}

solution(['b','o','c','a',15])

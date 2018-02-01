function solution(params) {
    let arr = []
    for (let i = 0; i < params.length; i++) {
        if (params[i] === 'add') {
            if (arr.length === 0) {
                arr.push(1)
            } else {
                let number = arr[arr.length - 1] + 1
                arr.push(number)
            }
        } else {
            if (arr.length === 0) {
                continue
            } else{
                arr.pop()
            }
        }  
    }

    if (arr.length === 0) {
        console.log('Empty')
    }else{
        console.log(arr.join('\n'))
    }
}

solution(['add','add','remove','add','add'])



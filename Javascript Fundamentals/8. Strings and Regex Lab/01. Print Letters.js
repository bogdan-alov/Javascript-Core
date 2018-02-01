function solution(str) {
    arr = str.split('')

    for (let i = 0; i < arr.length; i++) {
        console.log(`str[${i}] -> ${arr[i]}`)
    }
}


solution('Hello, world!')
function main(value,repeat) {
    let result = ''

    for (let i = 0; i < repeat; i++) {
        result += value  
    }

    console.log(result)
}

main('repeat',5)
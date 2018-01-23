function wordsUppercase(value) {
    let matches = value.match(/\w+/g)
    let result = ""

    for (let i = 0; i < matches.length; i++) {
        if (i === matches.length - 1) {
            result += matches[i].toUpperCase()
            break
        }
        result += matches[i].toUpperCase() + ', '
        
    }

    console.log(result)
}


wordsUppercase('Hi, my name is Bogdan!')
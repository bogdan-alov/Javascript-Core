function solution(sentence) {
    let arr = []
    while (sentence.indexOf('(') !== -1) {
        let word = sentence.substring(sentence.indexOf('('),sentence.indexOf(')') + 1)
        arr.push(word.replace('(','').replace(')',''))
        sentence = sentence.replace(word,'')
    }

    console.log(arr.join(', '))
}


solution('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')


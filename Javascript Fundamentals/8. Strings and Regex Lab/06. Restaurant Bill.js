function solution(params) {
    let elements = []
    let sum = 0

    for (let i = 0; i< params.length; i +=2 ) {
        elements.push(params[i])
        sum += parseFloat(params[i+1])
        
    }

    console.log(`You purchased ${elements.join(', ')} for a total sum of ${sum}`)
}

solution(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])
function agggregateParms(params) {
    let sum = 0
    let inversed_sum = 0
    let concat_numbers = ""
    for (let i = 0; i < params.length; i++) {
        sum += params[i]
        inversed_sum += 1 /params[i] 
        concat_numbers += params[i]
    }

    console.log(sum)
    console.log(inversed_sum)
    console.log(concat_numbers)
}


agggregateParms([2,4,8,16])
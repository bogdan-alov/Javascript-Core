function calculateBottles(boxCapacity,bottles) {
    let calculation = boxCapacity / bottles
    if( boxCapacity % bottles > 0){
        return parseInt(calculation + 1)
    }

    return parseInt(calculation)
}


console.log(calculateBottles(20,5))
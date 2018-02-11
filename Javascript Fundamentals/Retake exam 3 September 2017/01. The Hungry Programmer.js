function solution(meals,commands) {
    let no_food_message = 'The food is gone'
    let meals_eaten = 0
    for (let i = 0; i < commands.length; i++) {
        command = commands[i].split(' ').map(c=> c.toLowerCase())
        if (command[0] === 'serve') {
            if (meals.length === 0) {
                continue
            } else {
                let meal = meals.pop()
                console.log(`${meal} served!`)
                //eals_eaten++
            }
        } else if(command[0] === 'add'){
            let meal = command[1]
            meals.unshift(meal)
        } else if(command[0] === 'shift'){

            let first_index = parseInt(command[1])
            let second_index = parseInt(command[2])
            if (first_index < 0 || first_index >= meals.length || second_index <0 || second_index >= meals.lenth ) {
                continue
            }
            let first_meal = meals[first_index]
            meals[first_index] =  meals[second_index]
            meals[second_index] = first_meal

        } else if(command[0] === 'eat'){
            if (meals.length === 0) {
                continue
            } else {
                let meal = meals[0]
                meals.splice(0,1)
                console.log(`${meal} eaten`)
                meals_eaten++
            }
        } else if(command[0] == 'consume'){
            let first_index = parseInt(command[1])
            let second_index = parseInt(command[2])

            if (first_index < 0 || first_index >= meals.length || second_index <0 || second_index >= meals.lenth) {
                continue
            }

            if (meals.length === 0) {
                continue
            } else {
                let delCount = (second_index - first_index) + 1;
                meals.splice(first_index, delCount)
                console.log('Burp!')
                meals_eaten += delCount
            }
        } else if(command[0] == 'end'){
            break;
        }
        
    }
    if (meals.length === 0) {
        console.log(no_food_message)
    } else{
        console.log(`Meals left: ${meals.join(', ')}`)
    }
    console.log(`Meals eaten: ${meals_eaten}`)
}


//solution(['carrots', 'apple', 'beet'], ['Consume 0 2', 'End'])
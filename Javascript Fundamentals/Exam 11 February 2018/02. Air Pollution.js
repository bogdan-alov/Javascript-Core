function main(matrix,commands) {
    // Initialize matrix
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ').map(c=> parseInt(c))
    }

    let pollutedAreas = []
    for (let i = 0; i < commands.length; i++) {
        let commandArr = commands[i].split(' ')

        if (commandArr[0] === 'breeze') {
            let index = parseInt(commandArr[1])
            for (let i = 0; i < matrix[index].length; i++) {
                if (matrix[index][i] - 15 < 0) {
                    matrix[index][i] = 0
                }else{
                    matrix[index][i] -=15
                }
            }
        }  else if (commandArr[0] === 'gale') {
            let index = parseInt(commandArr[1])
            for (let i = 0; i < matrix.length; i++) {
                if (matrix[i][index] - 20 < 0) {
                    matrix[i][index] = 0
                }else{
                    matrix[i][index] -= 20
                }
                
            }

        } else if (commandArr[0] === 'smog') {
            let amount = parseInt(commandArr[1])
            for (let i = 0; i < matrix.length; i++) {
                matrix[i] = matrix[i].map(c=> c += amount)
            }
        }
    }
    get_polluted_areas(matrix)

    if (pollutedAreas.length === 0) {
        console.log('No polluted areas')
    }else{
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`)
    }

    

    function get_polluted_areas(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] >= 50) {
                    pollutedAreas.push(`[${i}-${j}]`)
                }
                
            }
        }
    }
}

main(["5 7 3 28 32", "41 12 49 30 33", "3 16 20 42 12", "2 20 10 39 14", "7 34 4 27 24"],
  [ "smog 11", "gale 3", "breeze 1", "smog 2"])
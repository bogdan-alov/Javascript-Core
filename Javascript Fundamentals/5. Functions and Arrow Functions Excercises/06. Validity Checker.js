function checker(params) {
    let [x1,y1,x2,y2] = [params[0],params[1],params[2],params[3]]

    let distanceBetweenPoints = (x1,y1,x2,y2) => Math.sqrt(((x1 - y1) ** 2)+ ((x2-y2) ** 2))
    if (Number.isInteger(distanceBetweenPoints(x1,y1,0,0)) ) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }


    if (Number.isInteger(distanceBetweenPoints(x2,y2,0,0)) ) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }


    if (Number.isInteger(distanceBetweenPoints(x1,y1,x2,y2)) ) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}


checker([2,1,1,1])
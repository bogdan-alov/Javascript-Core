function distanceBetweenPoints(x1,y1,x2,y2){
    let distance = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)))
    return distance
}

console.log(distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985))
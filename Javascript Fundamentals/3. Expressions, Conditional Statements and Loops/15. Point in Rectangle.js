function pointInteract(values) {
    let [x,y,xMin,xMax,yMin,yMax] = [values[0],values[1],values[2],values[3],values[4],values[5]]
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside')
    } else {
        console.log('outside')
    }
}


pointInteract([8,-1,2,12,-3,3])
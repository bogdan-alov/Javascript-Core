function calculateDistanceIn3d(params) {
    let x1 = params[0]
    let y1 = params[1]
    let z1 = params[2]

    let x2 = params[3]
    let y2 = params[4]
    let z2 = params[5]


    let distance = Math.sqrt(((x2 - x1 ) * (x2 - x1)) + ((y2-y1) * (y2- y1)) + ((z2 - z1) * (z2 - z1)))

    console.log(distance)
}



calculateDistanceIn3d([3.5, 0, 1, 0, 2, -1])
function calculateDistance(values) {
    let v1 = values[0]
    let v2 = values[1]
    // Turn seconds into hours
    let t = values[2] / 3600

    let s1 = v1 * t
    let s2 = v2 * t
    
    //Turn km in m
    let delta = Math.abs(s1 - s2) * 1000

    console.log(delta)
}


calculateDistance([11, 10, 120])
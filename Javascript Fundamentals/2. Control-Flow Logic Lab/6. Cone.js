function calculateConeAreaAndVolume(r,h) {
    volume = (Math.PI * r * r * h) / 3
    s = Math.sqrt((r * r) + (h * h))
    area = (Math.PI * r * s) + (Math.PI * r * r)

    console.log("volume = " + volume)
    console.log("area = " + area)
}

calculateConeAreaAndVolume(3,5)

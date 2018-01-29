function roadRadar(input){
    let road_limits = {'motorway':130,'interstate':90,'city':50,'residential':20}

    let limit = road_limits[input[1]]
    getInfraction(input[0],limit)
    function getInfraction(speed,limit) {
        let overspeed = speed - limit 
        if (overspeed <= 0) {
            console.log('')
        } else {
            if (overspeed <= 20) {
                console.log('speeding')
            }
            else if (overspeed <= 40){
                console.log('excessive speeding')
            } else if(overspeed > 40){
                console.log('reckless driving')
            } 
        }  

    }
}


roadRadar([120,'city'])
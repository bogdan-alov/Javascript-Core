function treasureLocator(values) {
    
    let tovalu_check = (x1,y1) => x1 >= 1 && x1 <= 3 && y1 >= 1 && y1 <=3 ? true: false
    let tokelau_check = (x1,y1) => x1 >= 8 && x1 <= 9 && y1 >= 0 && y1 <= 1 ? true : false 
    let samoa_check = (x1,y1) => x1 >=5 && x1 <= 7 && y1 >= 3 && y1 <= 6 ? true : false
    let tonga_check = (x1,y1) => x1 >= 0 && x1 <= 2 && y1 >= 6 && y1 <= 8 ? true : false 
    let cook_check = (x1,y1) => x1 >= 4 && x1 <= 9 && y1 >= 7 && y1 <= 8 ? true : false 

    for (let i = 0; i < values.length; i+=2) {
        let [x1,y1] = [values[i], values[i + 1]]
        
        if (tovalu_check(x1,y1)) {
            console.log('Tuvalu')
        } else if (tokelau_check(x1,y1)) {
            console.log('Tokelau')
        } else if (samoa_check(x1,y1)) {
            console.log('Samoa')
        } else if (tonga_check(x1,y1)) {
            console.log('Tonga')
        } else if (cook_check(x1,y1)) {
            console.log('Cook')
        } else{
            console.log('On the bottom of the ocean')
        }
    }
    
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3])
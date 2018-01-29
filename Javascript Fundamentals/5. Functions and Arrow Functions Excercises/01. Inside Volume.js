function insideVolume(arr){

    for (let index = 0; index <arr.length; index = index + 3) {
        checkIfInVolume(arr[index],arr[index+1],arr[index+2])
    }
    function checkIfInVolume(x,y,z) {
        let [x1,x2] = [10, 50]
        let [y1,y2] = [20, 80]
        let [z1,z2]= [15, 50]

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    
                    console.log('inside')
                }
            }
        } else{
            console.log('outside')
        }  
    }
}


insideVolume([13.1, 50, 31.5,50, 80, 50,-5, 18, 43])
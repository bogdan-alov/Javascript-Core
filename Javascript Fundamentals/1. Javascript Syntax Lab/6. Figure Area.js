function calculateArea(w,h,W,H) {
    area1 = w * h 
    area2 = W * H
    area3 = Math.min(w,W) * Math.min(h,H)


    return area1 + area2 - area3
}


console.log(calculateArea(13, 2, 5, 8))
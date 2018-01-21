function calculateTriangleArea(side_a,side_b,side_c) {
    s = (side_a + side_b + side_c) / 2

    return Math.sqrt(s * (s - side_a) * (s - side_b) * (s - side_c))
}


console.log(calculateTriangleArea(2,3.5,4))
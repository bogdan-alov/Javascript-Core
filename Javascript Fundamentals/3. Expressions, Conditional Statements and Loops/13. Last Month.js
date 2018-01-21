function checkLastMonthDay(params) {
    let [day,month,year] = [params[0], params[1], params[2]]
    if (month === 1) {
        month = 13
    }
    let date = new Date(year,month- 1,0)
   
    console.log(date.getDate())
}


checkLastMonthDay([13, 12, 2004])
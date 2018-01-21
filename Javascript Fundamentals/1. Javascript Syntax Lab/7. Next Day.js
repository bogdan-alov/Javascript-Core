function nextDay(year,month,day) {
    let str_date = year + "-" + month + "-" + day
    date = new Date(str_date)
    date.setDate(date.getDate() + 1)
    let output_year = date.getFullYear()
    let output_month = date.getMonth() + 1
    let output_day = date.getDate()
    return output_year + "-" + output_month + "-" + output_day
}


console.log(nextDay(1,1,1))
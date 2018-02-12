function main(days) {

    const bitcoin_price = 11949.16
    const gold_price = 67.51

    days = days.map(c=> parseFloat(c))
    let total_money = 0
    let first_bitcoin_bought_day = 0
    let bought_bitcoins = 0

    for (let i = 1; i <= days.length; i++) {
        if (i % 3 === 0) {
            days[i-1] = days[i -1 ] * 0.7
        }

        let exchange_in_money = days[i-1] * gold_price
        
        total_money += exchange_in_money
        
        while (total_money >= bitcoin_price) {
            total_money -=  bitcoin_price
            if (first_bitcoin_bought_day === 0) {
                first_bitcoin_bought_day = i
            }

            bought_bitcoins++
        }  
    }

    console.log('Bought bitcoins: ' + bought_bitcoins)
    if (first_bitcoin_bought_day !== 0) {
        console.log('Day of the first purchased bitcoin: ' + first_bitcoin_bought_day)
    }
    console.log(`Left money: ${parseFloat(total_money).toFixed(2)} lv.` )
}


main(['3124.15','504.212','2511.124'])
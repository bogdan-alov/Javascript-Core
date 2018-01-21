function calculateSumVatTotal(args) {
    sum = 0
    for (i = 0; i < args.length; i++) {
        sum += args[i]
    }

    console.log("sum = " + sum)
    vat = (sum / 100 ) * 20
    console.log("VAT = " + vat)
    total = sum + vat
    console.log("total = " + total)

}

calculateSumVatTotal([1,2,3])
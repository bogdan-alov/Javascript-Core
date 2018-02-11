function main(params) {
    let arr = []
    for (let i = 1; i < params.length; i++) {
        let data = params[i].substr(1).split('|')
        let latitude = parseFloat(data[1].trim())
        let longitude = parseFloat(data[2].trim())

        arr.push({"Town":data[0].trim(),"Latitude":latitude,"Longitude":longitude})
        
    }

    console.log(arr)
}

main(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
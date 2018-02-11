function main(value,delimiter) {
    let arr = value.split(delimiter).forEach(element => {
        console.log(element)
    });
}

main('One-Two-Three-Four-Five','-')
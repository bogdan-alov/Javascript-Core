function main(text) {
    let pattern = /\b(?:_)([A-Za-z0-9]+)\b/g

    let matches = text.match(pattern).map(c=> c.substr(1))

    console.log(matches.join(','))
}


main('__invalidVariable _evenMoreInvalidVariable_ _validVariable')
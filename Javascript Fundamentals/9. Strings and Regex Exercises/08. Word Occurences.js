function main(input,word) {
    let pattern = new RegExp(`\\b${word}\\b`, "gi")
    let matches = input.match(pattern)

    console.log(matches === null ? 0 : matches.length)
}

main('The waterfall was so high, that the child couldn’t see its peak.', 'the')
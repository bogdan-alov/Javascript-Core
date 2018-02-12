function main(input) {
    let get_label_naming_pattern = /<svg>\s*<cat>\s*<text>(.+)[[](.+)[\]]\s*<\/text>\s*<\/cat>\s*<cat>.*<\/cat>\s*<\/svg>/gm
    let match = get_label_naming_pattern.exec(input)

    if (match === null) {
        console.log('No survey found')
    } else if (match !== null && input.indexOf('svg') < 0) {
        console.log('Invalid format')
    }else{
    
    let label = match[2]
    let votes = 0
    let rating = 0

    let survey = match[0]
    let survey_values_pattern = /<\/cat>\s*<cat>(.*)<\/cat>/gm

    let values = survey_values_pattern.exec(survey)[1]
    let right_value_pattern = /<g><val>(\d*)<\/val>(\d*)<\/g>/gm
    do {
        m = right_value_pattern.exec(values);
        if (m) {
            rating += parseInt(m[1]) * parseInt(m[2])
            votes += parseInt(m[2])
        }
    } while (m);


    let final_rating =Math.round(rating / votes  * 100) / 100 

    console.log(`${label}: ${final_rating}`)
    }
}


main("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>")
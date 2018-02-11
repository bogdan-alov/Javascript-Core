function main(params) {
    let text = params.join(' ')
    let pattern = /(\d+)/g

    let nums = text.match(pattern)

    console.log(nums.join(' '))
}


main(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45'])
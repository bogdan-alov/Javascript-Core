function main(params) {
    console.log(params.sort((a,b)=> a.length - b.length).sort((a,b) => a - b).join('\n'))
}


main(['alpha','beta','gamma'])
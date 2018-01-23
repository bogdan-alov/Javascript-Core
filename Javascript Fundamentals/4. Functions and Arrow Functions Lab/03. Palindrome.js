function checkIfPalindrome(word) {
    let arr = word.split('').reverse().join("")
    if (arr === word ) {
        return true
    }else {
        return false
    }
    
}

console.log(checkIfPalindrome('racecar'))
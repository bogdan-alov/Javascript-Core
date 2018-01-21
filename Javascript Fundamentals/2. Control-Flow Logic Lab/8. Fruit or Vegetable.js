function checkFood(food) {
    // banana, apple, kiwi, cherry, lemon, grapes, peach
    let fruits = ['banana', 'apple','kiwi', 'cherry', 'lemon', 'grapes', 'peach']

     // tomato, cucumber, pepper, onion, garlic, parsley
    let vegetables = ['tomato','cucumber', 'pepper', 'onion', 'garlic','parsley']
    if (fruits.indexOf(food) > -1){
        console.log('fruit')
    }
    else if (vegetables.indexOf(food) > -1) {
        console.log('vegetable')
    }
    else{
        console.log("unknown")
    }
   
}


console.log(checkFood('banana'))
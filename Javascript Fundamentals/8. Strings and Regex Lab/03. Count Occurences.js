function solution(word,text) {
    let count = text.split(word).length - 1
    console.log(count)
}

solution('ma','Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')
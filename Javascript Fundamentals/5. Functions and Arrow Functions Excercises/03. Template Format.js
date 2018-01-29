function templateFormat(params) {
    let template = fillTemplate(params[0],params[1])
    console.log(template)
    function fillTemplate(question,answer){
        return `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n  <question>\n    ${question}\n  </question>\n  <answer>\n    ${answer}\n  </answer>\n </quiz>`
    }
}


templateFormat(["Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"])
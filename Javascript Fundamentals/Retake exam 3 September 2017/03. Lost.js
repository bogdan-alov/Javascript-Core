function solution(delimiter,text) {
    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    delimiter = escapeRegExp(delimiter);
    const coordinates = /(north|east)[^0-9]*(\d{2})[^,]*,[^0-9]*(\d{6})/gmi;
    const regexMsg = new RegExp(`${delimiter}(.+)${delimiter}`, "gmi");
    let message_info = new Map()
    let message = ''
    while ((m = coordinates.exec(text)) !== null) {
        let direction = m[1];
        let d1 = m[2];
        let d2 = m[3];
        if (!message_info.has(direction.toLowerCase())) {
            message_info.set(direction.toLowerCase(), []);
        }

        message_info.get(direction.toLowerCase()).push(`${d1}.${d2} ${direction[0].toUpperCase()}`);
    }

    while ((m = regexMsg.exec(text)) !== null) {
        message += m[1]
    }

   console.log(message_info.get("north").pop())
   console.log(message_info.get("east").pop())
   console.log("Message: "+message)
}

solution('4ds', 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532')
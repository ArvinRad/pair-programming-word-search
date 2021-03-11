const transpose = require('./transpose');
const wordSearch = (letters, word) => { 
    let finalResult = false;
    if (letters.length > word.length) {
        const horizontalJoin = letters.map(ls => ls.join(''))
        for (l of horizontalJoin) {
            if (l.includes(word)) finalResult = true
        }
    
        const verticalJoin = (transpose(letters).map(ls => ls.join('')));
        for (l of verticalJoin) {
            if (l.includes(word)) finalResult = true
        }
    }
    return finalResult
}

module.exports = wordSearch
const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    function symbolInMorse(str) {
        let result = [];
        function switchToMorse(x) {
            switch (x) {
                case "00": return "";
                case "10": return ".";
                case "11": return "-";
            }
        }
        for (let i = 0; i < str.length / 2; i++) {
            result.push(str.slice((2 * i), ((i + 1) * 2)))
            result[i] = switchToMorse(result[i])
        }
        return result.join('')
    }
    function inMorse(str) {
        let result = [];
        for (let i = 0; i < str.length / 10; i++) {
            result.push(expr.slice(10 * i, (i + 1) * 10))
        }
        for (let i = 0; i < result.length; i++) {
            if (result[i] === '**********') {
                result[i] = ' '
            } else {
                result[i] = symbolInMorse(result[i])
            }
        }
        return result
    }

    expr = inMorse(expr)

    for (let key in MORSE_TABLE) {
        for (let i = 0; i < expr.length; i++) {
            if (key === expr[i]) {
                expr[i] = MORSE_TABLE[key]
            }
        }
    }
    return expr.join("")
}

module.exports = {
    decode
}
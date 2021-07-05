
function padString(str, num, symb, rightDirection = true) {
    if (typeof str !== 'string') return 'Некорректное слово';
    if (typeof num !== 'number') return 'Некорректное число';    

    if (num > str.length) {
        if (typeof symb !== "string" || symb.length !== 1) return 'Некорректный символ';
        for (let i = str.length; i < num; i++) {
            if (rightDirection) str += symb;
            else str = symb + str;
        }
    }
    else {
           str = str.substr(0, num);
    }
    return (str);
}


console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));

























function padString() {
    if (typeof str !== 'string') return 'Некорректное слово';
    if (typeof num !== 'number') return 'Некорректное число';
    if (symb.length !== 1) return 'Некорректный символ';

    if (num > arr.length) {
        for (let i = arr.length; i < num; i++) {
            if (checkDirection) arr.push(symb);
            else arr.unshift(symb);
        }
    }
    else {
        for (let i = arr.length; i > num; i--) {
            arr.pop();
        }
    }

    return(console.log(arr.join('')));
}

let str = prompt('Введите слово');
let num = +prompt ('Введите число что будет длиной введеного слова после выполнения функции');
let symb = '*';
let checkDirection = confirm ('Куда вставить звездочку?');
let arr = str.split('');

padString(str, num, symb, checkDirection);


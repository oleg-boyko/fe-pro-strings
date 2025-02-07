/**
*Запара была с первой функцией,особенно - как организовать склейку оставшейся части строк с заменой звздочками)


* Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {  
     let result = '';
       for (let symbol of string){
         if(symbol.toLowerCase().includes('z') || symbol.toLowerCase().includes('v'))
        {
          result = `${result}*`;
        }
       else  { 
          result = `${result}${symbol}`
              }
         }
        return result;
        };

 
   
    
/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
    const pos = string.indexOf(word);
    const startString = string.slice(0, pos);
    const endString = string.slice(pos + word.length);
     return `${startString}${newWord}${endString}`;
       };
 
  


/*  альтернативное решение
const changeWord = (string, word, newWowrd) => {
    let result = string, i = 0, wordSubLen = word.length;
    while (wordSubLen) {
      i = result.toLowerCase().indexOf(word, i);
      if (i === -1) {
      break;
      };
      result = `${result.slice(0, i)}newWord${result.slice(i + wordSubLen)}`;
      i += wordSubLen;
    };
    return result;
  };
     */



  



/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
      /*let str = string;*/
      return string.slice(string, length);
    };
   
    
 
 

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
    let charCounter = 0; 
      for(let char of string){
        if(char.toLowerCase().includes(symbol)){
        charCounter++;
        }// end if
      };//end for of
    return charCounter;
    };//end function
   
  



/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
     let charCounter = 0;
    let currentPos = 0;
      while (true) {
      let charPos = string.toLowerCase().indexOf(symbol, currentPos);
        if (charPos === -1) break;
        currentPos = charPos + 1; 
        charCounter++;
        }// end while
    return charCounter;
    };// end function
   
 
  









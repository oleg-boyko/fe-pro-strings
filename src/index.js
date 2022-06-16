/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {  //не мог почему-то допетрать первую задачу,а остальные решил вовремя((
       let result = '';
      for (let symbol of 'string'){
        if(symbol.toLowerCase().includes('z') || symbol.toLowerCase().includes('v'))
        {
        result = `${result}*`;
        }
      else { 
      result = `${result}${symbol}`
        }
       }
    return result;
    };
    replaceZAndVFromString ();
    


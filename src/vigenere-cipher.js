const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(boolean) {
    this.boolean = true;
    this.boolean = false;
  }

  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');//
    if(!this.boolean||this.boolean === true) {
    if(!message || !key)  {
      throw new Error ('Incorrect arguments!');
    }
    let arrLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let arrMessage = message.split('');
    let arrKey = key.split('');
    let indexKeyEl = 0;
    let result = [];
    arrMessage.forEach(el => {
      if(arrLetters.includes(el.toUpperCase())) {
        let cryptoLetterIndex = arrLetters.indexOf(el.toUpperCase()) + arrLetters.indexOf(arrKey[indexKeyEl].toUpperCase());
        if(cryptoLetterIndex >= 26) {
          cryptoLetterIndex = cryptoLetterIndex - 26;
        }
        result.push(arrLetters[cryptoLetterIndex]);
        indexKeyEl += 1;
        if(indexKeyEl === arrKey.length) {
          indexKeyEl = 0;
        }
      } else {
        result.push(el);
      }
    })
    return result.join('');
  } else {
    if(!message || !key)  {
      throw new Error ('Incorrect arguments!');
    }
    let arrLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let arrMessage = message.split('');
    let arrKey = key.split('');
    let indexKeyEl = 0;
    let result = [];
    arrMessage.forEach(el => {
      if(arrLetters.includes(el.toUpperCase())) {
        let cryptoLetterIndex = arrLetters.indexOf(el.toUpperCase()) + arrLetters.indexOf(arrKey[indexKeyEl].toUpperCase());
        if(cryptoLetterIndex >= 26) {
          cryptoLetterIndex = cryptoLetterIndex - 26;
        }
        result.push(arrLetters[cryptoLetterIndex]);
        indexKeyEl += 1;
        if(indexKeyEl === arrKey.length) {
          indexKeyEl = 0;
        }
      } else {
        result.push(el);
      }
    })
    return result.reverse().join('');

  }
}
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if(!this.boolean||this.boolean === true) {
    if(!message || !key)  {
      throw new Error ('Incorrect arguments!');
    }
    let arrLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let arrMessage = message.split('');
    let arrKey = key.split('');
    let indexKeyEl = 0;
    let result = [];
    arrMessage.forEach(el => {
      if(arrLetters.includes(el.toUpperCase())) {
        let cryptoLetterIndex = arrLetters.indexOf(el.toUpperCase()) - arrLetters.indexOf(arrKey[indexKeyEl].toUpperCase());
        if(cryptoLetterIndex < 0) {
          cryptoLetterIndex = cryptoLetterIndex + 26;
        }
        result.push(arrLetters[cryptoLetterIndex]);
        indexKeyEl += 1;
        if(indexKeyEl === arrKey.length) {
          indexKeyEl = 0;
        }
      } else {
        result.push(el);
      }
    })
    return result.join('');
  } else {
    if(!message || !key)  {
      throw new Error ('Incorrect arguments!');
    }
    let arrLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let arrMessage = message.split('');
    let arrKey = key.split('');
    let indexKeyEl = 0;
    let result = [];
    arrMessage.forEach(el => {
      if(arrLetters.includes(el.toUpperCase())) {
        let cryptoLetterIndex = arrLetters.indexOf(el.toUpperCase()) - arrLetters.indexOf(arrKey[indexKeyEl].toUpperCase());
        if(cryptoLetterIndex < 0) {
          cryptoLetterIndex = cryptoLetterIndex + 26;
        }
        result.push(arrLetters[cryptoLetterIndex]);
        indexKeyEl += 1;
        if(indexKeyEl === arrKey.length) {
          indexKeyEl = 0;
        }
      } else {
        result.push(el);
      }
    })
    return result.reverse().join('');
  }
}
}

module.exports = {
  VigenereCipheringMachine
};

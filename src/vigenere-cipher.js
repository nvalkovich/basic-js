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

  #alphabet = 'abcdefghijklmnopqrstuvwxyz';
  #isDirect = null;

  constructor(isDirect = true) {
    this.#isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toLowerCase();
    key = key.toLowerCase()
    let messageValues = message.split('').map(x => x = this.#alphabet.indexOf(x));
    let keyValues = key.split('').map(x => x = this.#alphabet.indexOf(x));
    let shift = 0;
    let result = [];

    for (let i = 0; i <= message.length; i++) {
      if (messageValues[i] >= 0) {
        let messageValue = messageValues[i];
        let keyValue = keyValues[(i - shift) % keyValues.length];
        let value = ((messageValue + keyValue) % 26);
        result.push(this.#alphabet[value]);
      } else {
        shift += 1;
        result.push(message[i])
      }
    }

    return this.#isDirect === true || '' ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toLowerCase();
    key = key.toLowerCase();
    let messageValues = message.split('').map(x => x = this.#alphabet.indexOf(x));
    let keyValues = key.split('').map(x => x = this.#alphabet.indexOf(x));
    let shift = 0;
    let result = [];

    for (let i = 0; i <= message.length; i++) {
      if (messageValues[i] >= 0) {
        let messageValue = messageValues[i];
        let keyValue = keyValues[(i - shift) % keyValues.length];
        let value = (messageValue - keyValue) >= 0 ? (messageValue - keyValue) % 26 : (((messageValue - keyValue) % 26) + 26) % 26;
        result.push(this.#alphabet[value]);
      } else {
        shift += 1;
        result.push(message[i])
      }
    }

    return this.#isDirect === true || '' ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};

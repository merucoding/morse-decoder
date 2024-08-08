const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const MORSE_TABLE_MOD = {};
  MORSE_TABLE_MOD['**********'] = ' ';
  let res = '';

  for (let key in MORSE_TABLE) {
    let modKey = key
      .replace(/\./g, '10')
      .replace(/-/g, '11');
    while (modKey.length < 10) {
      modKey = '0' + modKey;
    }
    MORSE_TABLE_MOD[modKey] = MORSE_TABLE[key];
  }

  for (let i = 0; i < expr.length; i += 10) {
    const slice = expr.slice(i, i + 10);
    res += MORSE_TABLE_MOD[slice];
  }
  return res;
}

module.exports = {
    decode
}

const CryptoJS = require('crypto-js')

export const DATA_ENCRYPTER = (data, key) => {
  if (data) {
    const _data = CryptoJS.AES.encrypt(data, key).toString()
    const _encrytedData = _data.replace(/\+/g, 'xMl3Jk').replace(/\//g, 'Por21Ld').replace('=', 'Ml32')
    return _encrytedData;
  }
}

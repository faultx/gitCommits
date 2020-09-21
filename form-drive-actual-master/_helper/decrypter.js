const CryptoJS = require('crypto-js')

export const DATA_DECRYPTER = (data, key) => {
  if (data) {
    const _data = data.toString();
    const _decodedData = _decoder(_data);
    return CryptoJS.AES.decrypt(_decodedData, key).toString(CryptoJS.enc.Utf8)
  }
}

function _decoder(data) {
  if (data) {
    return decodeURIComponent(data).replace(/ /gi, '+')
  } else {
    return false
  }
}

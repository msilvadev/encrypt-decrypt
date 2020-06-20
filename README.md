# Encrypt and Decrypt

Core function of this project
```Encrypt and Decrypt Data
convertText(encryptOrDecrypt: string) {
  if (encryptOrDecrypt == "encrypt") {
    this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.dataToEncrypt, this.key, { iv: this.iv });
  }
  else {
    this.conversionDecryptOutput =
      CryptoJS.AES.decrypt(this.dataText, this.key, { iv: this.iv }).toString(CryptoJS.enc.Utf8);
  }
}
```
_To use CryptoJS.AES.encrypt() function in your project, you **need** to install this dependency_
```Crypto-js dependency
npm i crypto-js --save
```

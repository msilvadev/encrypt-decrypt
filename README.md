# Encrypt and Decrypt

Core function of this project
```Encrypt and Decrypt Data
if (conversion == "encrypt") {
  this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.plainText.trim(), this.encPassword.trim()).toString();
} else {
  this.conversionDecryptOutput = CryptoJS.AES.decrypt(this.encryptText.trim(),    
  this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
    }
```

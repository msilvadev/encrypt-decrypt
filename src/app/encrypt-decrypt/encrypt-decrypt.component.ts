import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-encrypt-decrypt',
  templateUrl: './encrypt-decrypt.component.html',
  styleUrls: ['./encrypt-decrypt.component.css']
})
export class EncryptDecryptComponent {
  title = 'Encryption and Decryption';

  dataToEncrypt: string;
  dataText: string;
  conversionEncryptOutput: string;
  conversionDecryptOutput: string;

  key = CryptoJS.enc.Base64.parse(environment.encryptKey);
  //key is now e8b7b40e031300000000da247441226a, length=32
  iv = CryptoJS.enc.Base64.parse(environment.encryptIv);
  //iv is now 987185c4436764b6e27a72f2fffffffd, length=32

  constructor() { }

  convertText(encryptOrDecrypt: string) {
    if (encryptOrDecrypt == "encrypt") {
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.dataToEncrypt, this.key, { iv: this.iv });
    }
    else {
      this.conversionDecryptOutput =
        CryptoJS.AES.decrypt(this.dataText, this.key, { iv: this.iv }).toString(CryptoJS.enc.Utf8);
    }
  }
}

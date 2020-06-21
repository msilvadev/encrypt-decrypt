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

  private _key = CryptoJS.enc.Base64.parse(environment.encryptKey);
  private _iv = CryptoJS.enc.Base64.parse(environment.encryptIv);

  constructor() { }

  convertText(encryptOrDecrypt: string) {
    if (encryptOrDecrypt == "encrypt") {
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.dataToEncrypt, this._key, { iv: this._iv });
    }
    else {
      this.conversionDecryptOutput =
        CryptoJS.AES.decrypt(this.dataText, this._key, { iv: this._iv }).toString(CryptoJS.enc.Utf8);
    }
  }
}

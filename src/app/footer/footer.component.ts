import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(translate: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit(): void {
  }

}

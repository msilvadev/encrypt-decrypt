import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() language: string;
  
  constructor(translate: TranslateService) {
    translate.use('pt-br');
  }

  ngOnInit(): void {
  }

}

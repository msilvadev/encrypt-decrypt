import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  languages = [
    {"viewValue": "English", "value":"en"},
    {"viewValue": "Portugues", "value":"pt-br"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

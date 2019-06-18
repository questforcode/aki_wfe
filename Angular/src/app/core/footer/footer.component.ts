import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  author: string;
  date: Date;
  company: string;


  constructor() {

  }

  ngOnInit() {
    this.author = 'Aki';
    this.company = 'CIFE - Fuenlabrada';
    this.date = new Date();
  }

}

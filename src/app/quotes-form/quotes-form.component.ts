import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Quotes } from '@angular/compiler';
// import { EventEmitter } from 'stream';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})

export class QuotesFormComponent implements OnInit {
  
  quoted = new Quotes(0, "", "", "", "", new Date(), 0, 0);
  @Output() add = new EventEmitter<Quotes>();
  quotesForm: any;

  submitForm() {
    this.add.emit(this.quoted);
    this.quoted = new Quotes(0, "","", "", "", new Date(), 0, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

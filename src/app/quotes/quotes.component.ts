import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, "I can do all things through Christ who strengthens me","Bible","Bibilical title", "Cate", new Date(),  3, 1),
    new Quotes(2, "The way to get started is to quit talking and begin doing", "Walt Disney", "Motivational Title","James", new Date(), 8, 1),
    new Quotes(3, "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough", "Oprah Winfrey", "Motivational Title", "Benjamin", new Date(), 1, 2),

  ]
  // addNewQuote(quote:Quotes) {
  //   let arraysize = this.quotes.length;
  //   quote.id = arraysize+1;
  //   // quote.completeDate = new Date(quote.completeDate)
  //   this.quotes.unshift(quote)


  // }
  addNewQuote(quote:Quotes) {
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    // quote.completeDate = new Date(quote.completeDate)
    this.quotes.unshift(quote)


  }
  quoteDelete(isRead: boolean, index:number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }


  // arr:number[] = this.quotes.map(
  //   function(quote){
  //     return quote.upvotes
  //   }
  // )
  // highest = Math.max(...this.arr)
  // constructor() { }



  ngOnInit(): void {
  }

}

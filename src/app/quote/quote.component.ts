import { Component, OnInit } from '@angular/core';
import {Http,Response} from "@angular/http";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  private apiUrl = 'http://quotes.rest/qod.json';
  quote:string;
  quoteImgUrl:string;

  constructor(private http:Http ) {
    this.getQuote();

    setInterval(() => {
      this.getQuote()
    }, 8640000000); // 1 a day

  }


  ngOnInit() {
  }

  getQuote(){
    return this.http.get(this.apiUrl)
      .map((response: Response) =>  response.json())
      .subscribe((response) => {
      this.quote = response.contents.quotes[0].quote;
      this.quoteImgUrl = response.contents.quotes[0].background;
    });

  };


}

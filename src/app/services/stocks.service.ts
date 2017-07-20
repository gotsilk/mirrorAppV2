/**
 * Created by silkk on 7/20/2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class StocksService{

  protected apiKey ="NOCBKL43D34WV4MV";

  private stocksApiUrl:string = "http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AAAPL,GOOG";

  constructor(private http:Http){}




}

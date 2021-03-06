import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {convertState} from "../weather/ConvertState.js";
import {Observable} from "rxjs/Observable";
import {async} from "q";


@Injectable()
export class WeatherService {

  protected apiKey: string = "55100128fabdb2df";
  private city ={};
  private state = {};
  private urlCall : string = "http://api.wunderground.com/api/" + this.apiKey + "/forecast/q/autoip.json";

  private radarUrl:string = "http://http://api.wunderground.com/api/55100128fabdb2df/animatedradar/q/autoip.gif?newmaps=1";


  constructor(private http: Http) {
  }

  getWeather() {
    return this.http.get(this.urlCall)
      .map((res: Response) => res.json());
  };

  getCurrentIpLocation(){
      return this.http.get('http://ip-api.com/json')
      .map((response:Response) => response.json())
  }


}

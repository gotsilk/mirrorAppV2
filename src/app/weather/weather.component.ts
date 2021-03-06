import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {convertState} from "./ConvertState.js";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']

})
export class WeatherComponent implements OnInit {

  weatherData = {};
  state:string;
  city:string;

  radarUrl:string = "http://api.wunderground.com/api/55100128fabdb2df/animatedradar/q/autoip.gif?newmaps=1";
  onScreenRadarUrl:string = this.radarUrl;

  constructor(private weatherService : WeatherService) {
    this.weatherService.getWeather().subscribe((response) => {
      // console.log(response);
      this.weatherData = response;
    });

    setInterval(() => {
      this.onScreenRadarUrl = this.radarUrl+"?"+new Date().getTime();
      // console.log(this.onScreenRadarUrl)
    }, 360000);//5 min


  }

  ngOnInit() {
    this.weatherService.getCurrentIpLocation().subscribe((response) =>{
      // console.log(response);
      this.state = convertState(response.regionName);
      // console.log(this.state);
      this.city = response.city;
      });


    setInterval(()=>{
      this.weatherService.getWeather().subscribe((response) => {
        // console.log(response);
        this.weatherData = response;
      })
    },36000000);//1 hr
  }
}

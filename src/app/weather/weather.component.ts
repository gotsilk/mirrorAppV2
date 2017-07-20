import {Component, OnInit, Output} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {Forecastday2, Simpleforecast} from "./Weather.model";
import {convertState} from "./ConvertState.js";



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']

})
export class WeatherComponent implements OnInit {

  weatherData = {};
  @Output() state:string;
  @Output() city:string;

  constructor(private weatherService : WeatherService) {
    this.weatherService.getWeather().subscribe((response) => {
      // console.log(response);
      this.weatherData = response;
    });

  }

  ngOnInit() {
    this.weatherService.getCurrentIpLocation().subscribe((response) =>{
      console.log(response);
      this.state = convertState(response.regionName,'abbr');
      console.log(this.state);
      this.city = response.city;
      });


    // setInterval(() => {
    //   this.weatherService.getWeather().subscribe((response) => {
    //     this.weatherData = response;
    //     console.log(this.weatherData);
    //
    //   });
    // }, 100000); // 4 times a day
  }



}

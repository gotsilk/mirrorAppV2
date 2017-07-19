import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {Forecastday2, Simpleforecast} from "./Weather.model";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']

})
export class WeatherComponent implements OnInit {

  weatherData = {};

  constructor(private weatherService : WeatherService) {
    this.weatherService.getWeather().subscribe((response) => {
      this.weatherData = response;
    });

  }

  ngOnInit() {


    // setInterval(() => {
    //   this.weatherService.getWeather().subscribe((response) => {
    //     this.weatherData = response;
    //     console.log(this.weatherData);
    //
    //   });
    // }, 100000); // 4 times a day
  }



}

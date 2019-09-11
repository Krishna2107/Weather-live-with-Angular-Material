import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          'https://api.apixu.com/v1/current.json?key=8cd86ca5864c4790861121553190609&q=' + location
      );
  }
}

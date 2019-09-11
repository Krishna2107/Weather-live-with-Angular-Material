import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from "../weather.service";
import { ThemeService } from '../theme.service';
import { Observable } from 'rxjs';  

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  isDarkTheme: Observable<boolean>;
  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService,
    private themeService: ThemeService ) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  //theme-change-related
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  //weather-related
  sendToAPIXU(formValues){
    this.weatherService
    .getWeather(formValues.location)
    .subscribe(data => this.weatherData = data)
      console.log(this.weatherData);
    }
}

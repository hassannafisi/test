import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeatherForcast() {
    console.log('weatherForcast');
    return this.http.get<string[]>('http://localhost:5269/weatherforecast');
  }
}

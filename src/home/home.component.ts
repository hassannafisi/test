import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  weather$!: Observable<string[]>;

  constructor(private weatherService: WeatherService) {
    console.log('asd');
    this.weather$ = this.weatherService.getWeatherForcast();
  }

  ngOnInit(): void {

  }

}

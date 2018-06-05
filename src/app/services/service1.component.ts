import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styles: []
})
export class Service1Component implements OnInit {
  city: string;
  cityList: any[];
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityList = this.cityService.GetCityList();
  }
  AddCity() {
    this.cityService.Add(this.city);
  }
}

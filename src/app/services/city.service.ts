import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CityService {
  private cityList: any[] = [];
  constructor(private http: Http) {
    this.cityList.push('Noida');
    this.cityList.push('Delhi');
  }

  Add(city: string) {
    this.cityList.push(city);
  }
  GetCityList() {
    return this.cityList;
  }
}

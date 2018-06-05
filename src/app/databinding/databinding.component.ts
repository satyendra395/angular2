import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: []
})
export class DatabindingComponent implements OnInit {
  company: string;
  name: string;
  url: string;
  constructor() { }

  ngOnInit() {
    this.company = 'Dot Net Tricks';
    this.name = 'Shailendra';
    this.url = 'http://www.dotnettricks.com';
  }

  Greet() {
    alert(`Hi! ${this.name}`);
  }
}

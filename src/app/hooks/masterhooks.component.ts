import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-masterhooks',
  templateUrl: './masterhooks.component.html',
  styles: []
})
export class MasterhooksComponent implements OnInit, OnChanges {
  company:string;
  course:string;
  constructor() {
    this.company='Dot Net Tricks';
    this.course='Angular';
    console.log('Master : Constructor');
  }

  ngOnInit() {
    console.log('Master : ngOnInit');
  }

  ngOnChanges() {
    console.log('Master : ngOnChanges');
  }

  ngDoCheck(){
    console.log('Master : DoCheck');
  }
}

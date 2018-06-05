import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styles: []
})
export class DirComponent implements OnInit {
  num: number;
  alphabet: string;
  colors: string[];
  constructor() {
    this.alphabet = 'a';
    this.colors = ['red', 'blue', 'green'];
  }

  ngOnInit() {
  }

}

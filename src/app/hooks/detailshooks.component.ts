import { Component, Input, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detailshooks',
  templateUrl: './detailshooks.component.html',
  styles: []
})
export class DetailshooksComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() company: string;
  name: string;
  constructor() {
    console.log('Details : Constructor');
  }

  ngOnInit() {
    console.log('Details : ngOnInit');
  }

  ngOnChanges() {
    console.log('Details : ngOnChanges');
  }
  ngDoCheck() {
    console.log('Details : DoCheck');
  }
  ngOnDestroy(){
    console.log('Details : OnDestroy');
  }
}

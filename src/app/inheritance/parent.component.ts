import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {

  constructor(protected route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Parent : ngOnInit');
  }

}

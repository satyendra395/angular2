import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: []
})
export class PipeComponent implements OnInit {
  employees: any[];
  constructor() { }

  ngOnInit() {
    this.employees = [{
      name: 'Shailendra', address: 'Noida', salary: 10000, joining: new Date()
    },
    {
      name: 'Ankit', address: 'Delhi', salary: 11000, joining: new Date()
    },
    {
      name: 'Mohit', address: 'Gurgaon', salary: 8000, joining: new Date()
    }]
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'static-table',
  template: './template.html',
  styles: [
  ]
})
export class StaticTableComponent implements OnInit {

  constructor() { }
  @Input() columns: any;
  @Input() data: any;

  ngOnInit(): void {
  }

}

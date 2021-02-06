import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'static-table',
  template: `<table>
  <thead>
      <tr>
          <th *ngFor="let item of columns">{{item}}</th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let item of data;let index = index">
          <td *ngFor="let cell of item">{{cell}}</td>
      </tr>
  </tbody>
</table>`,
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

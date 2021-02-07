import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'static-table',
  templateUrl: './static-table.component.html',
  styleUrls: ['./static-table.component.css']
})
export class StaticTableComponent implements OnInit {

  constructor() { }
  @Input() columns: any;
  @Input() data: any;

  ngOnInit(): void {
  }

}

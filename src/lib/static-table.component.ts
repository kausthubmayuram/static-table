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
  @Input() fixedHeader: boolean = false;
  @Input() tableId: any;
  @Input() contentAlign: any = 'left';
  @Input() headerAlign: any = 'left';

  ngOnInit(): void {
    
  }

}

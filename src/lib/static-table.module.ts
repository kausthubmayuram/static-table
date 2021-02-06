import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { StaticTableComponent } from './static-table.component';



@NgModule({
  declarations: [StaticTableComponent],
  imports: [
    BrowserModule
  ],
  exports: [StaticTableComponent]
})
export class StaticTableModule { }

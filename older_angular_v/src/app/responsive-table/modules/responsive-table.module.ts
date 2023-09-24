import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveTableComponent } from '../components/responsive-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResponsiveTableComponent],
  exports:[ResponsiveTableComponent]
})
export class ResponsiveTableModule { }
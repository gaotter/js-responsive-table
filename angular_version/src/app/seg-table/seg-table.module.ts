import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegTableComponent } from './seg-table.component';
import { SegTdComponent } from '../seg-td/seg-td.component';
import { SegTheadComponent } from '../seg-thead/seg-thead.component';
import { SegTrComponent } from '../seg-tr/seg-tr.component';



@NgModule({
  declarations: [SegTableComponent, SegTdComponent, SegTheadComponent, SegTrComponent],
  imports: [
    CommonModule
  ],
  exports: [SegTableComponent, SegTdComponent, SegTheadComponent, SegTrComponent]
})
export class SegTableModule { }

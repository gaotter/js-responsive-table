import { Component, ViewEncapsulation, Input, ContentChildren, QueryList, AfterContentInit, OnInit } from '@angular/core';
import { ITemplateTableModel } from '../template-table/template-table.model';
import { SegTrComponent } from '../seg-tr/seg-tr.component';
import { SegTheadComponent } from '../seg-thead/seg-thead.component';

@Component({
  selector: 'seg-table',
  standalone: true,
  templateUrl: './seg-table.component.html',
  styleUrls: ['./seg-table.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SegTableComponent implements AfterContentInit, OnInit {
 

  @Input() gridModel : ITemplateTableModel | undefined;

  @ContentChildren(SegTrComponent)
  templatesTr: QueryList<SegTrComponent> | undefined;

  @ContentChildren(SegTheadComponent)
  templatesThead: QueryList<SegTheadComponent> | undefined;

  ngOnInit(): void {
  
  }  

  ngAfterContentInit(): void {
    this.templatesTr?.forEach((template:SegTrComponent) => {
      if(!!this.gridModel) {
        template.setGridModel(this.gridModel); 
      }
    });

    this.templatesThead?.forEach((template:SegTheadComponent) => {
      if(!!this.gridModel) {
        template.setGridModel(this.gridModel); 
      }
    });
  }
}

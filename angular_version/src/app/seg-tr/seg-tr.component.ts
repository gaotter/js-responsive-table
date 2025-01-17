import { ChangeDetectorRef, Component } from '@angular/core';
import { ITemplateTableModel } from '../template-table/template-table.model';
import { HostListener, ContentChildren } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { QueryList } from '@angular/core';
import { SegTdComponent } from '../seg-td/seg-td.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'seg-tr',
  templateUrl: './seg-tr.component.html',
  styleUrls: ['./seg-tr.component.scss'],

})
export class SegTrComponent implements AfterContentInit{

  private gridModel : ITemplateTableModel | undefined;
  public innerWidth: number = 0;
  public gridStyle: string = '';

  public expanded: boolean = false; 


  @ContentChildren(SegTdComponent)
    templates: QueryList<SegTdComponent> | undefined;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridStyle();  
  }

  constructor(private changeDetector : ChangeDetectorRef) { }

  ngAfterContentInit(): void {
    this.updateGridStyle();

  }

  public toggleExpand() {
    this.expanded = !this.expanded;
  }

  public setGridModel(gridModel: ITemplateTableModel) 
  {
    this.gridModel = gridModel;
    this.updateGridStyle();
    this.changeDetector.detectChanges();
  }

  private updateGridStyle() {
    this.innerWidth = window.innerWidth;
    const breakPoint = this.gridModel?.brakePoints.find((bp) => bp.maxWith != null && bp.maxWith > this.innerWidth) ||
      this.gridModel?.brakePoints.find((bp) => bp.maxWith == null);

    let areas = breakPoint?.gridAreas.split('" "') || [];
    areas = areas.map((area, i) => i > 0 ? area.replace(/"/g, '') : area.replace(/"/g, ''));

    const firstArea = areas.length > 0 ? areas[0] : '';
    const columns = breakPoint?.gridColums + ' 20px';

    let allareasString = '';

    areas.forEach((area, i) => {
      if(i == 0) {
        allareasString += '"' + area + ' extend' + '" ';
      }
      allareasString += '"' + area + ' .' + '" ';
    });

    this.templates?.forEach((template) => {
       const isPartOfFiestArea = firstArea.includes(template.area);
       template.setShowHeader(!isPartOfFiestArea);
    });

    if(!!columns && !!allareasString) {
      this.gridStyle = `grid-template-columns: ${columns}; grid-template-areas: ${allareasString};`;
    }
  }
}

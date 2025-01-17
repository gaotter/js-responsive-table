import { ContentChildren, HostListener } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ITemplateTableModel } from '../template-table/template-table.model';
import { SegTdComponent } from '../seg-td/seg-td.component';

@Component({
  selector: 'seg-thead',
  templateUrl: './seg-thead.component.html',
  styleUrls: ['./seg-thead.component.scss']
})
export class SegTheadComponent {
  @Input() areas: string = '';
  public gridStyle: string = '';

  private gridModel : ITemplateTableModel | undefined;
  private innerWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridStyle();  
  }

  @ContentChildren(SegTdComponent)
    templates: SegTdComponent[] | undefined;

  public setGridModel(gridModel: ITemplateTableModel): void
  {
    this.gridModel = gridModel;
    this.updateGridStyle();
  }

  public updateGridStyle(): void
  {
    this.innerWidth = window.innerWidth;
    // get the first area that has a maxWith greater than the current width
    const breakPoint = this.gridModel?.brakePoints.find((bp) => bp.maxWith != null && bp.maxWith > this.innerWidth) ||
      this.gridModel?.brakePoints.find((bp) => bp.maxWith == null);

    // get the grid areas
    const areas = breakPoint?.gridAreas.split('" "') || [];
    
    const firstArea = areas.length > 0 ? areas[0].replace(/"/g, '') + ' extend' : '';
    const columns = breakPoint?.gridColums + ' 20px';

    const templates = this.templates || [];

    templates.forEach((template, i) => {
      const isPartOfFiestArea = firstArea.includes(template.area);
      template.setHidden(!isPartOfFiestArea);
    });

    if(!!columns && !!firstArea) {
      this.gridStyle = `grid-template-columns: ${columns}; grid-template-areas: "${firstArea}";`;
    }
  }
}

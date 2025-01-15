import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostListener,
  Input,
  OnInit,
  QueryList
} from '@angular/core';
import { ElementSelectorDirective } from '../element-selector.directive';
import { ITemplateTableModel } from './template-table.model';

@Component({
  selector: 'app-template-table',
  standalone: true,
  templateUrl: './template-table.component.html',
  imports: [CommonModule],
  styleUrls: ['./template-table.component.scss'],
})
export class TemplateTableComponent implements OnInit, AfterContentInit {
  public headerTemplates: ElementSelectorDirective[] = [];
  public cellTemplates: ElementSelectorDirective[] = [];
  public currentRow: string[] = [];
  public currnetHeaderRow: {[klass: string]: any;}[] = [];
  public styles: string = '';
  public stylesHeader: string = '';
  public innerWidth: number = 0;

  @Input()
  public rowData: any[] = [];

  @Input()
  public breakPoints: ITemplateTableModel | undefined;

  @ContentChildren(ElementSelectorDirective)
  templates: QueryList<ElementSelectorDirective> | undefined;

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const headerTemplates = this.templates?.filter((t) => t.isHeader);
    const cellTemplates = this.templates?.filter((t) => !t.isHeader);

    this.headerTemplates = headerTemplates || [];
    this.cellTemplates = cellTemplates || [];

    const areas = this.breakPoints?.gridAreas.split(' ');

    this.currentRow = this.headerTemplates.map((row, i) => {
      const currentChar = areas ? areas[i] : '';
      return currentChar;
    });    

    this.innerWidth = window.innerWidth;
    this.setUpDisplayGrid(areas);    
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    var areas = this.breakPoints?.gridAreas.split(' ');

    this.setUpDisplayGrid(areas);  
  }

  nextChar(c: string): string {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  private setUpDisplayGrid(areas: string[] | undefined) {
    const breakPoint = 
      this.breakPoints?.brakePoints.find(b => b.maxWith != null && b.maxWith > this.innerWidth) ||
      this.breakPoints?.brakePoints.find(b => b.maxWith == null);

    let allareas = breakPoint?.gridAreas.split('" "') || [];
    allareas = allareas.map((area, i) => i > 0 ? area.replace(/"/g, '') + ' .' : area.replace(/"/g, ''));
    
    let allareasString = '';

    allareas.forEach((area) => {
      allareasString += '"' + area + '" ';
    });

    const gridAreasHeaders = breakPoint?.gridAreas.split('" "')[0];
    const gridAreasHeaderNames = gridAreasHeaders?.replace(/"/g, '') || '';
    const gridAreasHeadersInput = `"${gridAreasHeaderNames}"`;
    const girdAreasWithExpand = `"${gridAreasHeaderNames} expand"`;

    const girdAreasWithExpandArray = allareasString.replace(gridAreasHeaderNames, `${gridAreasHeaderNames} expand`);    
    const gridColums = breakPoint?.gridColums + ' 20px' || '';

    this.styles = `grid-template-columns: ${gridColums};grid-template-areas: ${girdAreasWithExpandArray};`;
    this.stylesHeader = `grid-template-columns: ${gridColums};grid-template-areas: ${girdAreasWithExpand};`;    

    this.currnetHeaderRow = this.headerTemplates.map((row, i) => {
      const currentChar = areas ? areas[i] : '';
      const headershow = gridAreasHeadersInput?.includes(currentChar);

      if (!headershow)
        return { 'display': 'none' };

      return { 'grid-area': currentChar };
    });
  }
}

import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostListener,
  Input,
  OnInit,
  QueryList,
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
  public styles: string = '';
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

    var currentChar = '';

    var areas = this.breakPoints?.gridAreas.split(' ');

    this.currentRow = this.headerTemplates.map((row, i) => {
      currentChar = areas ? areas[i] : '';
      return currentChar;
    });

    this.innerWidth = window.innerWidth;
    const breakPoint = this.breakPoints?.brakePoints.find(b => b.maxWith > this.innerWidth);
    this.styles = `grid-template-columns: ${breakPoint?.gridColums};grid-template-areas: ${breakPoint?.gridAreas};`;
    console.log(this.styles);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    const breakPoint = this.breakPoints?.brakePoints.find(b => b.maxWith > this.innerWidth);
    this.styles = `grid-template-columns: ${breakPoint?.gridColums};grid-template-areas: ${breakPoint?.gridAreas};`;
    console.log(this.styles);
  }

  nextChar(c: string): string {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  getCurrentRow(currentChar: string): string {
    if (currentChar === '') {
      currentChar = 'a';
      return currentChar;
    } else {
      currentChar = this.nextChar(currentChar);
      return currentChar;
    }
  }
}

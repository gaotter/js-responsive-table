import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ElementSelectorDirective } from '../element-selector.directive';

@Component({
  selector: 'app-template-table',
  standalone: true,
  templateUrl: './template-table.component.html',
  imports: [CommonModule],
  styleUrls: ['./template-table.component.scss']
})
export class TemplateTableComponent implements OnInit , AfterContentInit {

  public headerTemplates: ElementSelectorDirective[] = [];
  public cellTemplates: ElementSelectorDirective[] = [];
  public currentRow: string[] = [];

  @Input()
  public rowData: any[] = [];

  @ContentChildren(ElementSelectorDirective)
  templates: QueryList<ElementSelectorDirective> | undefined;

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
     const headerTemplates = this.templates?.filter(t => t.isHeader);
     const cellTemplates = this.templates?.filter(t => !t.isHeader);

     this.headerTemplates = headerTemplates || [];
     this.cellTemplates = cellTemplates || [];

     var currentChar = '';
    this.currentRow = this.headerTemplates.map((row) => {
      currentChar = this.getCurrentRow(currentChar);
      return currentChar;
    });

     console.log(this.cellTemplates);
  }

  nextChar(c: string): string {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  getCurrentRow(currentChar:string): string {
    if(currentChar === '') {
      currentChar = 'a';
      return currentChar;
    } else {
      currentChar = this.nextChar(currentChar);
      return currentChar;
    }
  }
}

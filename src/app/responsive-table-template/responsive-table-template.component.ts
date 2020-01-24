import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Input, ViewEncapsulation } from '@angular/core';
import { ElementSelectorDirective } from '../element-selector.directive';
import { IResponsiveTableModelText, ISearchTableRow } from '../responsive-table/models/responsive-table.model';

@Component({
  selector: 'app-responsive-table-template',
  templateUrl: './responsive-table-template.component.html',
  styleUrls: ['./responsive-table-template.component.scss', './../css/responsive-table.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResponsiveTableTemplateComponent implements OnInit, AfterContentInit {

  @ContentChildren(ElementSelectorDirective)
  allElements: QueryList<ElementSelectorDirective>;

  @Input()
  tableModel:IResponsiveTableModelText;

  @Input()
  rowData:any[];

  headers: ElementSelectorDirective[];
  cells: ElementSelectorDirective[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (!!this.allElements) {
      this.headers = this.allElements.filter(f => f.identifiler === "header");
      this.cells = this.allElements.filter(f => f.identifiler === "cell");
    }
  }

  onShowClicked(searchTableRow:ISearchTableRow) {
    searchTableRow.show = !searchTableRow.show;
  }

}

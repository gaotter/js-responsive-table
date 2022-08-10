import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ElementSelectorDirective } from '../element-selector.directive';
import { IResponsiveTableModelTemplate, IResponsiveTableModelText, ISearchTableRow } from '../responsive-table/models/responsive-table.model';

@Component({
  selector: 'app-responsive-table-grid',
  templateUrl: './responsive-table-grid.component.html',
  styleUrls: ['./responsive-table-grid.component.scss']
})
export class ResponsiveTableGridComponent implements OnInit, AfterContentInit {

  @ContentChildren(ElementSelectorDirective)
  allElements:QueryList<ElementSelectorDirective>;

  @Input()
  tableModel:IResponsiveTableModelText

  @Input()
  rowData:any;

  headers:ElementSelectorDirective[];
  cells:ElementSelectorDirective[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if(!!this.allElements) {
      this.headers = this.allElements.filter(f => f.identifiler === "header");
      this.cells = this.allElements.filter(f => f.identifiler === "cell");
    }
  }

  onShowClicked(searchTableRow:ISearchTableRow) {
    searchTableRow.show = !searchTableRow.show;
  }
}

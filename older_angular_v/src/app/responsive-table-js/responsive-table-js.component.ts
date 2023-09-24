import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ElementSelectorDirective } from '../element-selector.directive';
import { IResponsiveTableModelTemplate, IResponsiveTableModelText, ISearchTableRow } from '../responsive-table/models/responsive-table.model';
import { mockData } from '../test.model';

@Component({
  selector: 'app-responsive-table-js',
  templateUrl: './responsive-table-js.component.html',
  styleUrls: ['./responsive-table-js.component.scss']
})
export class ResponsiveTableJsComponent implements OnInit, AfterContentInit {
  ngOnInit(): void {
  }

  @ContentChildren(ElementSelectorDirective)
  allElements:QueryList<ElementSelectorDirective>;

  @Input()
  tableModel:IResponsiveTableModelText

  @Input()
  rowData:any;

  headers:ElementSelectorDirective[];
  cells:ElementSelectorDirective[];

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

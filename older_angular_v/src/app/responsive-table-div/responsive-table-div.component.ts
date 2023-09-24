import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IResponsiveTableModelText, ISearchTableRow } from '../responsive-table/models/responsive-table.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-responsive-table-div',
  templateUrl: './responsive-table-div.component.html',
  styleUrls: ['./responsive-table-div.component.scss', './../css/responsive-table.scss'],
  providers:[DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class ResponsiveTableDivComponent {

  @Input()
  tableModel:IResponsiveTableModelText;

  onShowClicked(searchTableRow:ISearchTableRow) {
    searchTableRow.show = !searchTableRow.show;
  }

}

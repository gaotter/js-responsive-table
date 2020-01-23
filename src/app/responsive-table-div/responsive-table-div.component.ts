import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IResponsiveTableModel, ISearchTableRow } from '../responsive-table/models/responsive-table.model';
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
  tableModel:IResponsiveTableModel;

  onShowClicked(searchTableRow:ISearchTableRow) {
    searchTableRow.show = !searchTableRow.show;
  }

}

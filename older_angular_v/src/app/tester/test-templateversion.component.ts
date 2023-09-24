import { Component, OnInit } from '@angular/core';
import { mockData } from '../test.model';
import { IResponsiveTableModelText, ISearchTableRow, IResponsiveTableModelTemplate } from '../responsive-table/models/responsive-table.model';

@Component({
  selector: 'app-test-templateversion',
  templateUrl: './test-templateversion.component.html',
  styleUrls: ['./test-templateversion.component.scss']
})
export class TestTemplateversionComponent implements OnInit {

  testData = { ...mockData };
  tableModel: IResponsiveTableModelTemplate = null;

  ngOnInit():void {
    this.tableModel = this.mapToTableModel();
  }

  mapToTableModel(): IResponsiveTableModelTemplate {
    return {
      rows: this.testData.data.map((d) => ({ row: d }))
    };
  }
}

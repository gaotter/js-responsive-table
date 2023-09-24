import { Component, OnInit } from '@angular/core';
import { IResponsiveTableModelTemplate } from '../responsive-table/models/responsive-table.model';
import { mockData } from '../test.model';

@Component({
  selector: 'app-test-js-version',
  templateUrl: './test-js-version.component.html',
  styleUrls: ['./test-js-version.component.scss']
})
export class TestJsVersionComponent implements OnInit {
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

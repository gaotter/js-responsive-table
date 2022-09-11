import { Component, OnInit } from '@angular/core';
import { IResponsiveTableModelTemplate } from '../responsive-table/models/responsive-table.model';
import { mockData } from '../test.model';

@Component({
  selector: 'app-test-gid-version',
  templateUrl: './test-gid-version.component.html',
  styleUrls: ['./test-gid-version.component.scss']
})
export class TestGidVersionComponent implements OnInit {

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

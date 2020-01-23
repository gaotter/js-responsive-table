import { Component, OnInit } from '@angular/core';
import { mockData } from '../test.model';
import { IResponsiveTableModel, ISearchTableRow } from '../responsive-table/models/responsive-table.model';

@Component({
  selector: 'app-test-textversion',
  templateUrl: './test-textversion.component.html',
  styleUrls: ['./test-textversion.component.scss']
})
export class TestTextversionComponent implements OnInit {

  testData = { ...mockData };
  tableModel:IResponsiveTableModel = null;

  constructor() { }

  ngOnInit() {
    
    this.tableModel = this.mapToTableModel();
  }

  mapToTableModel(): IResponsiveTableModel {
    const mappedRows: ISearchTableRow[] = this.testData.data.map((d,i) => {
      const mappedR: ISearchTableRow = {
        row: d,
        textElements: [
          {
            value: d.address,
          },
          {
            value: d.description
          },
          {
            value: d.floor
          }
        ]
      }
      return mappedR;
    })

    const model: IResponsiveTableModel = {
      rows: mappedRows,
      headers: [
        {
          dataSize: "medium",
          headerDisplay: "Addresse"
        },
        {
          dataSize: "large",
          headerDisplay: "Bekrivelse"
        },
        {
          dataSize: "small",
          headerDisplay: "etasjer"
        }
      ]
    }
    return model;
  }
}

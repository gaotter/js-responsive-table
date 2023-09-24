import { Component, OnInit } from '@angular/core';
import { mockData } from '../test.model';
import { IResponsiveTableModelText, ISearchTableRow } from '../responsive-table/models/responsive-table.model';

@Component({
  selector: 'app-test-textversion',
  templateUrl: './test-textversion.component.html',
  styleUrls: ['./test-textversion.component.scss']
})
export class TestTextversionComponent implements OnInit {

  testData = { ...mockData };
  tableModel:IResponsiveTableModelText = null;

  constructor() { }

  ngOnInit() {
    
    this.tableModel = this.mapToTableModel();
  }

  mapToTableModel(): IResponsiveTableModelText {
    const mappedRows: ISearchTableRow[] = this.testData.data.map((d,i) => {
      const mappedR: ISearchTableRow = {
        row: d,
        textElements: [
          {
            value: d.title,
          },
          {
            value: ""
          },{
            value: d.lastSalesPrice ? d.lastSalesPrice.toString(): "0",
            type:"number"
          }
        ]
      }
      return mappedR;
    })

    const model: IResponsiveTableModelText = {
      rows: mappedRows,
      headers: [
        {
          dataSize: "medium",
          headerDisplay: "Title",
          screen:{
            down:"down",
            screenid:"screen-semi-large"
          }
        },
        {
          dataSize: "large",
          headerDisplay: "Bekrivelse",
          screen:{
            down:"down",
            screenid:"screen-medium"
          }
        },
        {
          dataSize: "small",
          headerDisplay: "salgs pris",
          screen:{
            down:"down",
            screenid:"screen-small"
          }   
        }
      ]
    }
    return model;
  }
}

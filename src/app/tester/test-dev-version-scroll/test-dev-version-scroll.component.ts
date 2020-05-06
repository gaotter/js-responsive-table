import { Component, OnInit } from '@angular/core';
import { mockData } from 'src/app/test.model';
import { IResponsiveTableModelText, ISearchTableRow } from 'src/app/responsive-table/models/responsive-table.model';

@Component({
  selector: 'app-test-dev-version-scroll',
  templateUrl: './test-dev-version-scroll.component.html',
  styleUrls: ['./test-dev-version-scroll.component.scss']
})
export class TestDevVersionScrollComponent implements OnInit {

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
            value: d.address,
          },
          {
            value: d.description
          },
          {
            value: d.floor
          },{
            value: d.lastSalesPrice ? d.lastSalesPrice.toString(): "0",
            type:"number"
          },{
            value:d.shareNumber ? d.shareNumber : "0"
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
          headerDisplay: "Addresse",
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
          dataSize: "micro",
          headerDisplay: "etasjer",
          screen:{
            down:"down",
            screenid:"screen-semi-medium"
          }
        },
        {
          dataSize: "small",
          headerDisplay: "salgs pris",
          screen:{
            down:"down",
            screenid:"screen-small"
          }   
        },
        {
          dataSize: "micro",
          headerDisplay: "share",
          screen:{
            down:"",
            screenid:""
          }          
        }
      ]
    }
    return model;
  }

}

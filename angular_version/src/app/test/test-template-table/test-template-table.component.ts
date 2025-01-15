import { Component } from '@angular/core';
import { ElementSelectorDirective } from 'src/app/element-selector.directive';
import { SemTableComponent } from 'src/app/sem-table/sem-table.component';
import { SemTdComponent } from 'src/app/sem-td/sem-td.component';
import { SemTheadComponent } from 'src/app/sem-thead/sem-thead.component';
import { SemTrComponent } from 'src/app/sem-tr/sem-tr.component';
import { TemplateTableComponent } from 'src/app/template-table/template-table.component';
import { ITemplateTableModel } from 'src/app/template-table/template-table.model';

@Component({
  selector: 'app-test-template-table',
  standalone: true,
  templateUrl: './test-template-table.component.html',
  styleUrls: ['./test-template-table.component.scss'],
  imports: [ElementSelectorDirective, TemplateTableComponent, SemTableComponent, SemTheadComponent, SemTdComponent, SemTrComponent]
})
export class TestTemplateTableComponent {
  testData = [
    {title: 'Title 1', description: 'Description 1', date: 'Date 1', amount: 'Amount 1', status: 'Status 1'},
    {title: 'Title 2', description: 'Description 2', date: 'Date 2', amount: 'Amount 2', status: 'Status 2'},
    {title: 'Title 3', description: 'Description 3', date: 'Date 3', amount: 'Amount 3', status: 'Status 3'},
    {title: 'Title 4', description: 'Description 4', date: 'Date 4', amount: 'Amount 4', status: 'Status 4'},
    {title: 'Title 5', description: 'Description 5', date: 'Date 5', amount: 'Amount 5', status: 'Status 5'},
    {title: 'Title 6', description: 'Description 6', date: 'Date 6', amount: 'Amount 6', status: 'Status 6'},
    {title: 'Title 7', description: 'Description 7', date: 'Date 7', amount: 'Amount 7', status: 'Status 7'},
    {title: 'Title 8', description: 'Description 8', date: 'Date 8', amount: 'Amount 8', status: 'Status 8'},
    {title: 'Title 9', description: 'Description 9', date: 'Date 9', amount: 'Amount 9', status: 'Status 9'},
    {title: 'Title 10', description: 'Description 10', date: 'Date 10', amount: 'Amount 10', status: 'Status 10'}
  ];

  public displayTemplate: ITemplateTableModel = {
    gridAreas: 'title description date amount status',
    brakePoints : [
      {
        gridAreas: '"title date" "amount ." "status ." "description ."',
        gridColums: '1fr 1fr',
        maxWith: 400
      },
      {
        gridAreas: '"title date description" "amount . ." "status . ."',
        gridColums: '2fr 1fr 1fr',
        maxWith: 600
      },{
        gridAreas: '"title description date status" "amount . . ."',
        gridColums: '1fr 1fr 1fr 1fr',
        maxWith: 700
      }, {        
        gridAreas: '"title description date amount status"',
        gridColums: '1fr 1fr 1fr 1fr 1fr'
      }
    ]
  }

}

import { Component, OnInit } from '@angular/core';
import { mockData } from '../test.model';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss', './../css/responsive-table.scss']
})
export class TesterComponent implements OnInit {


  testData = {...mockData};
  mapped:any[];

  dir:boolean = true;

  constructor() { }

  ngOnInit() {
    this.mapped = this.testData.data.map(d => ({row:d, show:false}));
  }

  onSort(selectedField) {
    this.dir = !this.dir;
    this.mapped.sort((a, b) => {
      const d = this.dir ? -1 : 1;
      
      return a.row[selectedField] > b.row[selectedField] ? -1 * d : 1 * d;
   
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { mockData } from '../test.model';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss', './../css/responsive-table.scss']
})
export class TesterComponent implements OnInit {


  testData = {...mockData};

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-table-div',
  templateUrl: './responsive-table-div.component.html',
  styleUrls: ['./responsive-table-div.component.scss']
})
export class ResponsiveTableDivComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const numOfColumns = 10;
    const numberOfRows = 10;


    for (let i = 0; i < numOfColumns; i++) {
      const headers = `header${i}`;
      this.model.headers.push(headers);

      for (let j = 0; j < numberOfRows; j++) {
        const row = `row${j}`;
        const cells = [];
        for (let f = 0; f < numOfColumns; f++) {
          const cell = `cell ${f} in  ${row} ${Math.floor((Math.random() * 1000000000) + 1)}`;
          cells.push(cell);
        }
        this.model.rows.push(cells);

      }
    }
  }

  model: {
    headers: string[];
    rows: any[][];
  } = {
      headers: [],
      rows: []
    }

}

import { Component, OnInit } from '@angular/core';
import { mockData } from './test.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  testheaders = ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11"];

  hidden:boolean = true;
   testData = mockData;
  model: {
    headers: string[];
    rows: any[][];
  } = {
      headers: [],
      rows: []
    }


    showPopup($event:MouseEvent) {
      $event.stopPropagation();
      this.hidden = !this.hidden;
     }
       

    ngOnInit(): void {
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

  testdata = {
    testheaders:["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11"],



    

    rows: [
      {
        testd: [
          {
            show:false,
            value:"1"
          },
          {
            show:false,
            value:"2"
          },
          {
            show:false,
            value:"3"
          },
          {
            show:false,
            value:"4"
          },
          {
            show:false,
            value:"5"
          },
          {
            show:false,
            value:"6"
          },
          {
            show:false,
            value:"7"
          },
          {
            show:false,
            value:"8"
          },
          {
            show:false,
            value:"9"
          },
          {
            show:false,
            value:"10"
          },
          {
            show:false,
            value:"11"
          }
          ],
          
      },
      {
        testd: [
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          }
          ],
          
      },
      {
        testd: [
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          }
          ],
          
      },
      {
        testd: [
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          }
          ],
          
      },
      {
        testd: [
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          },
          {
            show:false,
            value:"sdwdw"
          }
          ],
          
      },
    ]
  }

}


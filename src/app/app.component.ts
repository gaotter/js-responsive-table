import { Component, OnInit } from '@angular/core';
import { mockData } from './test.model';

enum selections {
  basic = "Basic",
  div = "Model based",
  template = "Template based"
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  selected:selections = selections.basic;
  selectionsref = selections;

  sels = Object.keys(selections).map(key => { 
    console.log("sell", selections[key]);
  return  {key:key, value:selections[key]};
  });

   setSelected(key:string) {
     this.selected = selections[key];
   }

}


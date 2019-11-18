import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Input, ViewEncapsulation } from '@angular/core';
import { ElementSelectorDirective } from '../element-selector.directive';

@Component({
  selector: 'app-responsive-table-template',
  templateUrl: './responsive-table-template.component.html',
  styleUrls: ['./responsive-table-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResponsiveTableTemplateComponent implements OnInit, AfterContentInit {


  @ContentChildren(ElementSelectorDirective)
  allElements: QueryList<ElementSelectorDirective>;

  @Input()
  rowData:any[];

  headers: ElementSelectorDirective[];
  cells: ElementSelectorDirective[];


  constructor() { }



  ngOnInit() {
  }


  ngAfterContentInit(): void {
    if (!!this.allElements) {
      this.headers = this.allElements.filter(f => f.identifiler === "header");
      this.cells = this.allElements.filter(f => f.identifiler === "cell");
    }
  }

}

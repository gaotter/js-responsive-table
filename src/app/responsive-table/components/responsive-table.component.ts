import { Component, OnInit, ViewEncapsulation, ContentChild, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mgmo-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResponsiveTableComponent implements OnInit, AfterViewInit {


  @ViewChild('tbody') tbody: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // const all = this.tbody.nativeElement.querySelectorAll("tbody tr");
    // console.log(all);
    // for (let tr of all) {
    //   tr.addEventListener('click', (e) => {
    //       e.class
    //   });
    // }

  }
}
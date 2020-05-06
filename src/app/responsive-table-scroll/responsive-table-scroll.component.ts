import { Component, OnInit, Input, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { IResponsiveTableModelText } from '../responsive-table/models/responsive-table.model';

@Component({
  selector: 'app-responsive-table-scroll',
  templateUrl: './responsive-table-scroll.component.html',
  styleUrls: ['./responsive-table-scroll.component.scss']
})
export class ResponsiveTableScrollComponent implements OnInit {

  @ViewChild("table")
  tableDiv: ElementRef;

  start = 0;
  maginleft = "0";
  steps = 100;
  showPopupRight = false;
  showPopupLeft = false;

  maxWidth = 805;

  @Input()
  tableModel: IResponsiveTableModelText;

  constructor() { }

  ngOnInit(): void {
  }

  moveRight($event) {
    const dif = -1 * (this.maxWidth - window.innerWidth);
    const newValue = dif < this.start ? this.start - this.steps : dif;
    this.start = newValue <= dif ? dif : newValue;
    this.start = this.start >= 0 ? 0 : this.start;

    this.maginleft = `${this.start}px`
  }

  moveLeft($event) {
    this.start = this.start <= -1 * this.steps ? this.start + this.steps : 0;
    this.maginleft = `${this.start}px`;
  }

  onMouseOver($event: MouseEvent) {
    console.log("$event", $event);
    if (this.tableDiv && $event.clientX > 200 && window.innerWidth < 805) {
      //   console.log("table div", this.tableDiv.nativeElement);
      //  this.start = this.start - 10;
      //  this.maginleft = `${this.start}px`;
      this.showPopupRight = true;
      this.showPopupLeft = false;
    }

    if (this.tableDiv && $event.clientX < 200 && window.innerWidth < 805) {
      //   console.log("table div", this.tableDiv.nativeElement);
      //  this.start = this.start <= -10 ? this.start + 10 : 0;
      //  this.maginleft = `${this.start}px`;
      this.showPopupLeft = true;
      this.showPopupRight = false;
    }

    if (window.innerWidth > 805) {
      this.showPopupRight = false;
      this.showPopupLeft = false;
      this.maginleft = "0";

    }
  }
}

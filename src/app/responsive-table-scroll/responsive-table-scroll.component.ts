import { Component, OnInit, Input, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { IResponsiveTableModelText } from '../responsive-table/models/responsive-table.model';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-responsive-table-scroll',
  templateUrl: './responsive-table-scroll.component.html',
  styleUrls: ['./responsive-table-scroll.component.scss']
})
export class ResponsiveTableScrollComponent implements OnInit {

  @ViewChild("table") tableDiv: ElementRef;

  @ViewChild("container", { read: ElementRef }) perScrollElement: ElementRef;

  @ViewChild(PerfectScrollbarComponent) perScrollComp: PerfectScrollbarComponent;

  start = 0;
  maginleft = "0";
  steps = 100;
  showPopupRight = false;
  showPopupLeft = false;

  maxWidth = 805;

  scrollCongif = {

  }

  @Input()
  tableModel: IResponsiveTableModelText;

  constructor() { }

  ngOnInit(): void {
  }


  goToStart() {
    console.log("pf", this.perScrollComp);
    this.perScrollComp.directiveRef.scrollToX(0);
  }

  goToMiddle() {
    console.log("pf wel", this.perScrollComp.directiveRef.elementRef.nativeElement.scrollLeftMax);
    console.log("pf", this.perScrollComp.directiveRef.position(true), this.perScrollComp.directiveRef.ps(),window.innerWidth , window.innerWidth / 2);
    this.perScrollComp.directiveRef.scrollToX(this.perScrollComp.directiveRef.elementRef.nativeElement.scrollLeftMax / 2);
   //  this.perScrollComp.directiveRef.scrollToX(789 / 2);


  //  const bound: number = this.perScrollComp.nativeElement.scrollWidth;
  //  const pWidth: number = this.perScrollElement.nativeElement.scrollWidth;

  //  const pos: number = (pWidth - bound) / 2;
  //  if (this.perScrollElement.nativeElement.scrollTo) {
  //      this.perScrollElement.nativeElement.scrollTo({
  //          left: pos,
  //          top: 0,
  //          behavior: "smooth",
  //      });
  //  } else {
  //      this.perScrollElement.nativeElement.scrollLeft = pos;
  //  }
  //  this.upDateScrollSelected("middle");
  }

  goToEnd() {
   
    this.perScrollComp.directiveRef.scrollToX(1024);
  }

  moveRight($event) {
    this.rightMove();
  }

  moveLeft($event) {
    this.start = this.start <= -1 * this.steps ? this.start + this.steps : 0;
    this.maginleft = `${this.start}px`;
  }

  onMouseOver($event: MouseEvent) {

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


  private rightMove() {
    const dif = -1 * (this.maxWidth - window.innerWidth);
    const newValue = dif < this.start ? this.start - this.steps : dif;
    this.start = newValue <= dif ? dif : newValue;
    this.start = this.start >= 0 ? 0 : this.start;
    this.maginleft = `${this.start}px`;
  }

}

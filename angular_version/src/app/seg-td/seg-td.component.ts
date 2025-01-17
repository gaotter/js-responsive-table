import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'seg-td',
  templateUrl: './seg-td.component.html',
  styleUrls: ['./seg-td.component.scss'],
  host: {
    '[style.grid-area]': 'gridArea'
  }
})
export class SegTdComponent implements OnInit {
  @Input() area: string = '';
  @Input() header: string = '';

  public gridArea: string = '';
  public style: string = '';  
  public showHeader = false;


  constructor(private changeDetector : ChangeDetectorRef) { }

  ngOnInit(): void {
    this.gridArea = this.area;
  }

  public setHidden(hidden: boolean): void {
    this.style = hidden ? 'display: none;' : '';
    this.changeDetector.detectChanges();
  }

  public setShowHeader(showHeader:boolean): void {
    this.showHeader = showHeader;
    this.changeDetector.detectChanges();
  }

  public getGidArea(): string {
    return this.area;
  }
}

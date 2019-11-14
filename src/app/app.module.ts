import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ResponsiveTableModule } from './responsive-table/modules/responsive-table.module';
import { ResponsiveTableDivComponent } from './responsive-table-div/responsive-table-div.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ResponsiveTableModule],
  declarations: [AppComponent, ResponsiveTableDivComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

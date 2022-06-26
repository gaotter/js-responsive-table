import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ResponsiveTableModule } from './responsive-table/modules/responsive-table.module';
import { ResponsiveTableDivComponent } from './responsive-table-div/responsive-table-div.component';
import { HelloComponent } from './hello.component';
import { ResponsiveTableTemplateComponent } from './responsive-table-template/responsive-table-template.component';
import { ElementSelectorDirective } from './element-selector.directive';
import { TesterComponent } from './tester/tester.component';
import { TestTemplateversionComponent } from './tester/test-templateversion.component';
import { TestTextversionComponent } from './tester/test-textversion.component';
import { TextValuePipe } from './pips/text-value.pipe';
import { ResponsiveTableScrollComponent } from './responsive-table-scroll/responsive-table-scroll.component';
import { TestDevVersionScrollComponent } from './tester/test-dev-version-scroll/test-dev-version-scroll.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: false
};

@NgModule({
  imports: [BrowserModule, FormsModule,PerfectScrollbarModule, ResponsiveTableModule],
  declarations: [AppComponent,
    ResponsiveTableDivComponent,
    HelloComponent,
    ResponsiveTableTemplateComponent,
    ElementSelectorDirective,
    TesterComponent,
    TestTemplateversionComponent,
    TestTextversionComponent,
    TextValuePipe,
    ResponsiveTableScrollComponent,
    
    TestDevVersionScrollComponent],
    providers: [
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

import { ResponsiveTableGridComponent } from './responsive-table-grid/responsive-table-grid.component';
import { TestGidVersionComponent } from './tester/test-gid-version.component';

@NgModule({

  imports: [BrowserModule, FormsModule, ResponsiveTableModule],
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
    TestGidVersionComponent,
    ResponsiveTableGridComponent,
    TestDevVersionScrollComponent],  

  bootstrap: [AppComponent]
})
export class AppModule { }

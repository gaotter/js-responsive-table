import { Component } from '@angular/core';
import { TestTemplateTableComponent } from './test/test-template-table/test-template-table.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TestTemplateTableComponent]
})
export class AppComponent {
  title = 'angular_version';
}

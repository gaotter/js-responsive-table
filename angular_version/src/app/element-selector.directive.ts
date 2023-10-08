import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appElementSelector]',
  standalone: true
})
export class ElementSelectorDirective {

  constructor(public template: TemplateRef<any>) { }

  @Input() data: any = {} as any;
  @Input() isHeader = false;

}

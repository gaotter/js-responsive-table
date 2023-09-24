import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appElementSelector]'
})
export class ElementSelectorDirective {

  constructor(public template: TemplateRef<any>) { }

  @Input()
  identifiler:string;

  @Input()
  data:any;

}

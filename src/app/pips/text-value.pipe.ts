import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITextValue } from '../responsive-table/models/responsive-table.model';

@Pipe({
  name: 'textValue'
})
export class TextValuePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  
  transform(value: ITextValue, useSub: boolean = false): any {
    const valueToUse = useSub ? value.subValue : value.value;
    const valueTypeToUse = useSub ? value.subValueType : value.type;
  

    if(valueTypeToUse=== "date") {
      return this.datePipe.transform(valueToUse, 'dd.MM.yyyy')
    }

    
    return valueToUse;
  }

}

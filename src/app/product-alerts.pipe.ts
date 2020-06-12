import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productAlerts'
})
export class ProductAlertsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
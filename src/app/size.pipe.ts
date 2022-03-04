import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(dressArray: any, size:any) {
    return dressArray.filter(function(item:any){
      return size === "" ? item.type === "" : item.type === size;      
 });
  }

}

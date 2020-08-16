import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strip'
})
export class StripPipe implements PipeTransform {

  transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '';
     const a=value.indexOf("//");
    // const b= value.indexOf(".com")
    if(value=='' || value==null){
      return value;
    }
    return value.length > limit ? value.substring(a+2, limit) + trail : value;
   }

}

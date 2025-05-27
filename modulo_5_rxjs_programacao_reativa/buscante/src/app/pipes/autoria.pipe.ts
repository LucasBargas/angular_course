import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoria'
})
export class AutoriaPipe implements PipeTransform {

  transform(autoria: string[] | undefined): string {
    return autoria && autoria.length > 0 ? autoria[0] : 'Autor desconhecido';
  }
}

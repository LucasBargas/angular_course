import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editora'
})
export class EditoraPipe implements PipeTransform {

  transform(editora: string | null): string {
    if (editora) {
      return editora;
    }
    return 'Editora desconhecida';
  }
}

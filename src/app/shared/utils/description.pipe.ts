import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
  transform(texto: string): string {
    if(texto.length > 50) {
      return texto.substr(0, 50) + '...';
    }
    return texto;
  }
}

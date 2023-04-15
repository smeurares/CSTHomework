import { Pipe, PipeTransform } from '@angular/core';
import { CityInterface } from '../interfaces/city-interface';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: CityInterface[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}

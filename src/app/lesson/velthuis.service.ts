import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VelthuisService {

  private readonly map = {
    'aa': 'ā',
    'ii': 'ī',
    'uu': 'ū',
    '.r': 'ṛ',
    '.rr': 'ṝ',
    '.l': 'ḷ',
    '.ll': 'ḹ',
    '.m': 'ṃ',
    '.h': 'ḥ',
    '.t': 'ṭ',
  };

  private readonly reverseMap = VelthuisService.flip(this.map);

  substitute(str: string): string {
    return str.split('').map(value => this.reverseMap[value] || value).join('');
  }

  static flip(obj: any): any {
    return Object.keys(obj).reduce((ret: any, key: any) => {
      ret[obj[key]] = key;
      return ret;
    }, {});
  }

}

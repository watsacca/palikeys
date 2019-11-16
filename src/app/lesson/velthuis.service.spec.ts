import {TestBed} from '@angular/core/testing';

import {VelthuisService} from './velthuis.service';

describe('VelthuisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should substitute empty string with empty string', () => {
    const service: VelthuisService = TestBed.get(VelthuisService);
    expect(service.substitute('')).toBe('');
  });

  it('should substitute pali', () => {
    const service: VelthuisService = TestBed.get(VelthuisService);
    expect(service.substitute('ā')).toBe('aa');
    expect(service.substitute('ū')).toBe('uu');
    expect(service.substitute('ṃ')).toBe('.m');
  });

  it('should flip empty Object', () => {
    const service: VelthuisService = TestBed.get(VelthuisService);
    expect(VelthuisService.flip({})).toEqual({});
  });

  it('should flip keys and values', () => {
    const service: VelthuisService = TestBed.get(VelthuisService);
    expect(VelthuisService.flip({a: 1, b: 2})).toEqual({1: 'a', 2: 'b'});
  });
});

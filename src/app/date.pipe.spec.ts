import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipe();
    expect(pipe).toBeTruthy();
  });

  it('providing date value returns formated data', () => {
    const pipe = new DatePipe();
    expect(pipe.transform('2017-03-13T12:18:31.000Z')).toBe('3 years ago');
  });

  it('providing no value returns fallback', () => {
    const pipe = new DatePipe();
    expect(pipe.transform('')).toBe('');
  });
});

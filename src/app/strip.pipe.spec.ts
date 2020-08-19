import { StripPipe } from './strip.pipe';

describe('StripPipe', () => {
  it('create an instance', () => {
    const pipe = new StripPipe();
    expect(pipe).toBeTruthy();
  });
  beforeEach(() => {
   const pipe = new StripPipe();
  });

  it('providing no value returns fallback', () => {
    const pipe = new StripPipe();
    expect(pipe.transform('', [20])).toBe('');
  });

  it('providing  value returns updated data', () => {
    const pipe = new StripPipe();
    expect(pipe.transform('http://sangaline.com/post/the-stories-that-hacker-news-removes-from-the-front-page/',
    [20])).toBe('sangaline.com');
  });
});

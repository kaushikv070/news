import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StripPipe } from './strip.pipe';
import { DatePipe } from './date.pipe';


import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const testData = [{created_at: '2017-03-13T12:18:31.000Z',
  title: 'Stories that Hacker News removes from the front page',
  url: 'http://sangaline.com/post/the-stories-that-hacker-news-removes-from-the-front-page/',
  author: 'foob', points: 1274, num_comments: 313},
  {created_at: '2017-03-13T12:18:31.000Z',
  title: 'test story',
  url: 'http://sangaline.com/post/the-stories-that-hacker-news-removes-from-the-front-page/',
  author: 'foob', points: 345, num_comments: 387}
];
  const id = [7672];
  const vote = [1274];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, StripPipe, DatePipe],
      imports: [
        HttpClientTestingModule,

      ],
      providers: [
        StripPipe,
        DatePipe
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    sessionStorage.setItem('news', JSON.stringify(testData));
    component.Ids = id;
    component.votes = vote;
    localStorage.setItem('pageNo', '0');
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loadData()', async(() => {
    component.news = testData;
    component.loaddata(false);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
        expect(component.currentPage).toBeFalsy();
    });
}));

  it('should clicknext Page', async(() => {
    spyOn(component, 'nextData');

    // expect(component.currentPage).toBeUndefined();
    const button = fixture.debugElement.nativeElement.querySelector('#next');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.nextData).toHaveBeenCalled();
    });
  }));

  it('should cast vote', async(() => {
    // spyOn(component, 'castVote');

   // expect(component.currentPage).toBeUndefined();
   const trs = fixture.nativeElement.querySelectorAll('tr');
   expect(trs).toBeTruthy();
   expect(trs.length).toBe(3);
   const row1 = trs[1];
    // expect(row1.cells[0].innerHTML).toBe('393');
    // expect(row1.cells[1].innerHTML).toBe('01-01-2020');
    // expect(row1.cells[2].innerHTML).toBe('admin,standard');
   const button = row1.cells[2].querySelector('#vote');
   button.click();

   fixture.detectChanges();

   expect(component.castVote(0)).toBe();

  }));

  it('should create', () => {
    expect(component.prevData()).toBe();
  });
  it('should create', () => {
    expect(component.nextData()).toBe();
  });
  it('should create', () => {
    expect(component.removeItem(0)).toBe();
  });

  it('should create', () => {
    expect(component.bookmark()).toBe();
  });



});

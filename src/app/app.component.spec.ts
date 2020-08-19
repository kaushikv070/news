import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loadData()', async(() => {
    component.loaddata(false);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
        expect(component.currentPage).toBeFalsy();
    });
}));

  it('should clicknext Page', async(() => {
    spyOn(component, 'nextData');

    expect(component.currentPage).toBeUndefined();
    const button = fixture.debugElement.nativeElement.querySelector('#next');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.currentPage).toBe(component.currentPage);
    });
  }));

  // it('should cast vote', async(() => {
  //   spyOn(component, 'castVote');

  //  // expect(component.currentPage).toBeUndefined();
  //   let button = fixture.debugElement.nativeElement.querySelector('#vote');
  //   button.click();

  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     // expect(component.castVote).toHaveBeenCalled();
  //   });
  // }));

  // it('should create', () => {
  //   expect(component.prevData()).toBe();
  // });
  // it('should create', () => {
  //   expect(component.nextData()).toBe();
  // });
  // it('should create', () => {
  //   expect(component.removeItem(0)).toBe();
  // });

  // it('should create', () => {
  //   expect(component.bookmark()).toBe();
  // });
  // it('should create', () => {
  //   expect(component.loaddata(true)).toBe();
  // });
  // it('should create', () => {
  //   expect(component.castVote(0)).toBe();
  // });

});

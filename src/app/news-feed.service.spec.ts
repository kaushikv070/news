import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { NewsFeedService } from './news-feed.service';

describe('NewsFeedService', () => {
  let service: NewsFeedService;

  
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [NewsFeedService]
  }));

  it('should be created', () => {
    const service= TestBed.get(NewsFeedService);
        expect(service).toBeTruthy();
   });


   it('should have getData function', () => {
    const service = TestBed.get(NewsFeedService);
    expect(service.getData().toBeTruthy());
   });
});

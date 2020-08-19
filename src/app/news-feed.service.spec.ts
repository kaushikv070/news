import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { NewsFeedService } from './news-feed.service';

describe('NewsFeedService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        NewsFeedService
      ],
    });

    const postService  = TestBed.get(NewsFeedService);
    // httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, NewsFeedService],
    (httpClient: HttpTestingController, postService1: NewsFeedService) => {

      postService1.sendGetRequest(0)
      .subscribe((posts: any) => {
        expect(posts.length).toBe(10);
      });


    })));
});


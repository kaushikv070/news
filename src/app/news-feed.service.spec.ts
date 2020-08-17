import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { NewsFeedService } from './news-feed.service';

describe('NewsFeedService', () => {
  let postService: NewsFeedService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        NewsFeedService
      ],
    });

    postService = TestBed.get(NewsFeedService);
    //httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, NewsFeedService],
    (httpClient: HttpTestingController, postService: NewsFeedService) => {

      postService.sendGetRequest(0)
      .subscribe((posts: any) => {
        expect(posts.length).toBe(10);
      });


    })));
});

